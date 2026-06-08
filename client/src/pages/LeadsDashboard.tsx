import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Loader2, Download, Filter, Search, Lock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { trpc } from '@/lib/trpc';
import { useAuth } from '@/_core/hooks/useAuth';
import { getLoginUrl } from '@/const';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function LeadsDashboard() {
  const { user, isAuthenticated, loading } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPhase, setFilterPhase] = useState<string>('');

  // Redirecionar se não autenticado ou não admin
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="animate-spin" size={40} />
      </div>
    );
  }

  if (!isAuthenticated || user?.role !== 'admin') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Card className="p-8 max-w-md text-center space-y-4">
          <Lock size={48} className="mx-auto text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Acesso Restrito</h2>
          <p className="text-muted-foreground">Você precisa estar autenticado como administrador para acessar o dashboard de leads.</p>
          <Button 
            onClick={() => window.location.href = getLoginUrl('/dashboard')}
            className="w-full"
          >
            Fazer Login
          </Button>
        </Card>
      </div>
    );
  }

  // Fetch leads usando tRPC
  const { data: leads, isLoading, error } = trpc.leads.getAll.useQuery();

  // Filtrar leads
  const filteredLeads = leads?.filter(lead => {
    const matchesSearch = 
      lead.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.whatsapp.includes(searchTerm);
    
    const matchesPhase = !filterPhase || lead.faseProjeto === filterPhase;
    
    return matchesSearch && matchesPhase;
  }) || [];

  // Estatísticas
  const stats = {
    total: leads?.length || 0,
    porFase: {
      planejamento: leads?.filter(l => l.faseProjeto === 'planejamento').length || 0,
      obras: leads?.filter(l => l.faseProjeto === 'obras').length || 0,
      acabamento: leads?.filter(l => l.faseProjeto === 'acabamento').length || 0,
      renovacao: leads?.filter(l => l.faseProjeto === 'renovacao').length || 0,
    },
    porInvestimento: {
      popular: leads?.filter(l => l.investimento === 'popular').length || 0,
      medio_baixo: leads?.filter(l => l.investimento === 'medio_baixo').length || 0,
      medio_alto: leads?.filter(l => l.investimento === 'medio_alto').length || 0,
      alto: leads?.filter(l => l.investimento === 'alto').length || 0,
    }
  };

  // Exportar para CSV
  const handleExportCSV = () => {
    if (!filteredLeads || filteredLeads.length === 0) return;

    const headers = ['Nome', 'WhatsApp', 'Fase do Projeto', 'Investimento', 'Data'];
    const rows = filteredLeads.map(lead => [
      lead.nome,
      lead.whatsapp,
      lead.faseProjeto,
      lead.investimento,
      format(new Date(lead.createdAt), 'dd/MM/yyyy HH:mm', { locale: ptBR })
    ]);

    const csv = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `leads_${format(new Date(), 'yyyy-MM-dd')}.csv`);
    link.click();
  };

  const getFaseLabel = (fase: string) => {
    const labels: Record<string, string> = {
      planejamento: 'Planejamento',
      obras: 'Em Obras',
      acabamento: 'Acabamento',
      renovacao: 'Renovação'
    };
    return labels[fase] || fase;
  };

  const getInvestimentoLabel = (inv: string) => {
    const labels: Record<string, string> = {
      popular: 'Até R$ 5.000',
      medio_baixo: 'R$ 5.000 - R$ 10.000',
      medio_alto: 'R$ 10.000 - R$ 20.000',
      alto: 'Acima de R$ 20.000'
    };
    return labels[inv] || inv;
  };

  const getInvestimentoColor = (inv: string) => {
    const colors: Record<string, string> = {
      popular: 'bg-blue-100 text-blue-800',
      medio_baixo: 'bg-green-100 text-green-800',
      medio_alto: 'bg-yellow-100 text-yellow-800',
      alto: 'bg-purple-100 text-purple-800'
    };
    return colors[inv] || 'bg-gray-100 text-gray-800';
  };

  if (isLoading || loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="animate-spin" size={40} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="p-6 max-w-md">
          <h2 className="text-lg font-semibold text-red-600 mb-2">Erro ao carregar leads</h2>
          <p className="text-sm text-muted-foreground">{error.message}</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">Dashboard de Leads</h1>
          <p className="text-muted-foreground">Visualize e gerencie todos os leads capturados da Estofatto Casa</p>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-6">
            <div className="text-sm text-muted-foreground mb-2">Total de Leads</div>
            <div className="text-3xl font-bold text-primary">{stats.total}</div>
          </Card>
          <Card className="p-6">
            <div className="text-sm text-muted-foreground mb-2">Planejamento</div>
            <div className="text-3xl font-bold text-blue-600">{stats.porFase.planejamento}</div>
          </Card>
          <Card className="p-6">
            <div className="text-sm text-muted-foreground mb-2">Em Obras</div>
            <div className="text-3xl font-bold text-green-600">{stats.porFase.obras}</div>
          </Card>
          <Card className="p-6">
            <div className="text-sm text-muted-foreground mb-2">Acabamento</div>
            <div className="text-3xl font-bold text-yellow-600">{stats.porFase.acabamento}</div>
          </Card>
        </div>

        {/* Filtros e Busca */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-muted-foreground" size={18} />
            <Input
              placeholder="Buscar por nome ou WhatsApp..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={filterPhase}
            onChange={(e) => setFilterPhase(e.target.value)}
            className="px-4 py-2 border border-border rounded-md bg-background text-foreground"
          >
            <option value="">Todas as fases</option>
            <option value="planejamento">Planejamento</option>
            <option value="obras">Em Obras</option>
            <option value="acabamento">Acabamento</option>
            <option value="renovacao">Renovação</option>
          </select>
          <Button onClick={handleExportCSV} variant="outline" className="gap-2">
            <Download size={18} />
            Exportar CSV
          </Button>
        </div>

        {/* Tabela de Leads */}
        <Card className="overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead>Nome</TableHead>
                <TableHead>WhatsApp</TableHead>
                <TableHead>Fase</TableHead>
                <TableHead>Investimento</TableHead>
                <TableHead>Data</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLeads.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                    Nenhum lead encontrado
                  </TableCell>
                </TableRow>
              ) : (
                filteredLeads.map((lead) => (
                  <TableRow key={lead.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{lead.nome}</TableCell>
                    <TableCell>
                      <a
                        href={`https://wa.me/${lead.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {lead.whatsapp}
                      </a>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{getFaseLabel(lead.faseProjeto)}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getInvestimentoColor(lead.investimento)}>
                        {getInvestimentoLabel(lead.investimento)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {format(new Date(lead.createdAt), 'dd/MM/yyyy HH:mm', { locale: ptBR })}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </Card>

        {/* Resumo de Investimentos */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Distribuição por Faixa de Investimento</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Até R$ 5.000</div>
              <div className="text-2xl font-bold text-blue-600">{stats.porInvestimento.popular}</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">R$ 5.000 - R$ 10.000</div>
              <div className="text-2xl font-bold text-green-600">{stats.porInvestimento.medio_baixo}</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">R$ 10.000 - R$ 20.000</div>
              <div className="text-2xl font-bold text-yellow-600">{stats.porInvestimento.medio_alto}</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Acima de R$ 20.000</div>
              <div className="text-2xl font-bold text-purple-600">{stats.porInvestimento.alto}</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
