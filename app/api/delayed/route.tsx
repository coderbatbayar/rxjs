export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const timeout = Number(searchParams.get('timeout')) || 60000;

  // Simulate a heavy operation by waiting for 1 minute
  await new Promise(resolve => setTimeout(resolve, timeout));

  return Response.json("Heavy response done")
}