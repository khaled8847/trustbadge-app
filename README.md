# TrustBadge — Shopify App

Add a beautiful trust badge bar to any Shopify store. Merchants pick their badges, customize colors, and publish with one click.

---

## Launch in 4 steps

### Step 1 — Install dependencies
```
npm install
```

### Step 2 — Create your Shopify app
1. Go to https://partners.shopify.com → create a free Partner account
2. Click Apps → Create app → Custom app
3. Set Redirect URL to: https://your-app.up.railway.app/auth/callback
4. Copy your API key and API secret

### Step 3 — Deploy free on Railway
1. Go to https://railway.app → sign up free
2. Push this folder to GitHub, then connect repo to Railway
3. Add environment variables (see .env.example)
4. Railway gives you a live URL automatically

### Step 4 — List on Shopify App Store
1. Partner dashboard → Apps → Distribution → Public
2. Fill in listing, set price at $4.99/month
3. Submit for review (1-5 days)

---

## Environment variables (.env)

SHOPIFY_API_KEY= from Partner dashboard
SHOPIFY_API_SECRET= from Partner dashboard
APP_URL= your Railway URL
SESSION_SECRET= any random string
PORT=3000

---

## Earning potential

- $4.99/month per store
- 50 installs = $250/month
- 200 installs = $1,000/month
- Shopify handles all billing automatically
