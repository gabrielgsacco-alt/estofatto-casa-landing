import express, { Request, Response, NextFunction } from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import compression from "compression";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Middleware de Compressão Gzip/Brotli
  app.use(compression({
    level: 6,
    threshold: 1024,
    filter: (req: Request, res: Response) => {
      if (req.headers['x-no-compression']) return false;
      return compression.filter(req, res);
    }
  }));

  // Middleware de Performance: Headers de Cache
  app.use((req: Request, res: Response, next: NextFunction) => {
    // Cache para assets estáticos (1 ano)
    if (req.path.match(/\.(js|css|woff2|woff|ttf|eot|svg|png|jpg|jpeg|webp|gif|ico)$/)) {
      res.set('Cache-Control', 'public, max-age=31536000, immutable');
    }
    // Cache para HTML (24 horas - permite atualizações)
    else if (req.path.endsWith('.html') || req.path === '/') {
      res.set('Cache-Control', 'public, max-age=86400, must-revalidate');
    }
    // Cache para API (sem cache)
    else if (req.path.startsWith('/api')) {
      res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.set('Pragma', 'no-cache');
      res.set('Expires', '0');
    }
    next();
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath, {
    maxAge: '1y',
    etag: false
  }));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req: Request, res: Response) => {
    res.set('Cache-Control', 'public, max-age=86400, must-revalidate');
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`[${new Date().toISOString()}] Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
