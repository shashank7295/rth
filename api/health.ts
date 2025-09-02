// Minimal handler without extra type dependencies
export default function handler(_req: unknown, res: any) {
  res.status(200).json({ ok: true, status: 'healthy' });
}
