/* global HTMLRewriter */
export async function onRequest({ request, next }) {
  const response = await next();

  const ogTitle = "AdsGPT - Smarter Ad Creation";
  const ogDescription = "Create high-converting ads instantly with AI.";
  const ogImage = "https://globussoft-app-assignment.pages.dev/geni.svg"; 

  return new HTMLRewriter()
    .on("head", {
      element(head) {
        head.append(
          `
          <meta property="og:title" content="${ogTitle}">
          <meta property="og:description" content="${ogDescription}">
          <meta property="og:image" content="${ogImage}">
          <meta property="og:type" content="website">
          <meta property="og:url" content="${request.url}">
          `,
          { html: true }
        );
      }
    })
    .transform(response);
}
