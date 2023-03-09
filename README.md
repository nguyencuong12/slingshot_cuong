This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Important GRAPAPI FACEBOOK

[GET] https://graph.facebook.com/PAGE-ID/conversations
?fields=participants
&access_token=PAGE-ACCESS-TOKEN

[POST] me/messages
[Params]

- recipient:{id:""}
- message:{"text":"This is content "}

[GET] get ID Conversation

- https://graph.facebook.com/103186962720276/conversations/
  ?fields=participants
  &access_token=EAAIjLTCNhoEBAOXcHJfLYfzbim6aczKGWYX8KvZCNxkdksDNN2EUuk1r79AEhyZAiZCwWUahkxU6Y3jVa16Dhp0JrsNdqmX4mdNcfu7xKhq17nXfyZC2rYkykl54p6iyQaRRqHMViTsXl5elZA26fE8sAYZAjDeyYltF32oFLYDWfluhVtZAgW98wExNGtjI7EYgxZCSaoYKukIoC27pbRkT

[ID] 6537522132943910

[POST] SEND MESSAGE :
https://graph.facebook.com/v16.0/103186962720276/messages?recipient={"id":"6537522132943910"}&message={"text":"This is text send from postman"}&messaging_type=RESPONSE&access_token=EAAIjLTCNhoEBAH34vyK8HKyaieGDpSKdUfNaIvTMOD6jDZBMJSww5ZCZAAh1rjZAKLIbTlaZCTJRH7ZBZCUMaRHZAFHbDcfFeNbWkVp1fnUoQQeJwENhrJOdzAWUM6gfdhVRp8MGuxq7ZAaoHE1R4vzwNA7eUKlgx2xKiuWV4a1Q7HIhFxQimZBzuPue0RWgXcxOCNnvJZAiMOZCsmhfuO4FH6ch
