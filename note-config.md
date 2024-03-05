# Install new project
npx create-next-app@latest .
npx shadcn-ui@latest init

# Install framework
npm i framer-motion lucide-react next-themes react-group react-countup react-icons swiper

npm install @radix-ui/react-icons

# Add package UI shadcn
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add form

npx shadcn-ui@latest add input
npx shadcn-ui@latest add label
npx shadcn-ui@latest add sheet
npx shadcn-ui@latest add tabs
npx shadcn-ui@latest add textarea

# package.json => replace scripts
"start": "NODE_ENV=production node server.js",