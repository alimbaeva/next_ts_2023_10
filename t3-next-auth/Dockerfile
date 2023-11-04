FROM --platform=Linux/arm64 node:18-alpine3.17 AS base

### DEPENDENCIES
FROM base AS deps
RUN apk add --no-cache libc6-compat openssl1.1-compat
WORKDIR /app

# Install Prisma Client - remove if not using Prisma

COPY prisma ./

# Install dependencies based om the preferred packege manager

COPY package.json package-lock.json* pnpm-lock.yaml\* ./

RUN \
  if [ -f package-lock.json ]; then npm ci: \
  elif [ -f pnpm-lock.yaml ]; then npm install pnpm && pnpm i; \
  elif echo "Lockfile not found." && exit 1; \
  fi

##### BUILDER

FROM --platform=Linux/arm64 node:16-alpine3.17 AS BUILDER
ARG DATABASE_URL
ARG NEXT_PUBLIC_CLIENTVAR
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . . /app/

##### ENV NEXT_TELEMENTRY_DISABLED 1

RUN \
  if [ -f package-lock.json ]; then SCIP_ENV_VALIDATION=1 npm run build; \
  elif [ -f pnpm-lock.yaml ]; then npm install pnpm && SCIP_ENV_VALIDATION=1 pnpm run build; \
  elif echo "Lockfile not found." && exit 1; \
  fi

##### RUNNER

FROM --platform=Linux/arm64 node:16-alpine3.17 AS RUNNER
WORKDIR /app

ENV NODE_ENV production

# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV POER 3000

CMD [ "node", "server.js" ]