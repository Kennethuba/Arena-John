# BusinessOS

A subscription platform for people who already have a trade. You pay for the software; the business inside it is yours.

Auto Garage is the first live workspace. A new company starts with empty books — no sample clients, jobs, or stock.

## Local setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — development server on `0.0.0.0:3000`
- `npm run build` — production build
- `npm start` — serve the production build

## Routes

- Home: `/`
- Businesses: `/businesses`
- Auto Garage landing: `/businesses/auto-garage`
- Sign up: `/businesses/auto-garage/signup`
- Log in: `/businesses/auto-garage/login`
- Dashboard (after sign up / log in): `/businesses/auto-garage/dashboard`
