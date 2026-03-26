<p align="center">
  <img src="site/assets/logo.png" alt="SDW For All" width="200">
</p>

<h1 align="center">Painel SDW For All</h1>

<p align="center">
  <strong>Painel de dados sobre acesso a agua tratada e saneamento em comunidades rurais brasileiras</strong>
</p>

<p align="center">
  <a href="https://painel.sdwforall.com">painel.sdwforall.com</a>&ensp;·&ensp;
  <a href="https://www.sdwforall.com">sdwforall.com</a>
</p>

<br>

## Sobre

Site que disponibiliza publicamente o dashboard de dados do projeto [SDW For All](https://www.sdwforall.com), construido no Looker Studio. Oferece uma experiencia de acesso com dominio proprio, identidade visual institucional, responsividade otimizada e carregamento suave.

<br>

## Stack

| Camada | Tecnologia |
|---|---|
| Frontend | HTML, CSS, JS (vanilla) |
| Servidor | nginx:alpine |
| Container | Docker |
| CI/CD | GitHub Actions → ghcr.io |
| Proxy/SSL | nginx-proxy + letsencrypt (infra compartilhada) |

<br>

## Estrutura

```
painel/
├── site/
│   ├── index.html          # pagina unica com header + iframe Looker
│   ├── style.css           # estilos, responsividade, animacoes
│   ├── script.js           # controle do loading state
│   ├── favicon.ico
│   └── assets/
│       └── logo.png
├── nginx/
│   └── default.conf        # gzip, cache, headers de seguranca
├── Dockerfile
├── docker-compose.yml      # integracao com nginx-proxy
└── .github/
    └── workflows/
        └── build-push.yml  # build + push automatico para ghcr.io
```

<br>

## Desenvolvimento local

Abrir diretamente no navegador:

```bash
open site/index.html
```

Ou via Docker:

```bash
docker build -t painel .
docker run -p 8080:80 painel
# acessar http://localhost:8080
```

<br>

## Deploy

O CI/CD esta configurado via GitHub Actions. A cada push na branch `main`:

1. Build da imagem Docker
2. Push para `ghcr.io/sdw-for-all/painel` (tags: `latest` + SHA)

No servidor de producao, o `docker-compose.yml` integra com a stack existente de nginx-proxy + letsencrypt:

```bash
docker compose pull
docker compose up -d
```

O nginx-proxy detecta o container automaticamente e configura reverse proxy + SSL para `painel.sdwforall.com`.

<br>

## Licenca

Propriedade de [SDW For All](https://www.sdwforall.com).
