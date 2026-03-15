export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mehmet Genc",
    url: "https://mehmetgenc.net",
    jobTitle: "Software Engineer",
    sameAs: [
      "https://github.com/mehmetgencv",
      "https://www.linkedin.com/in/mehmetgencv/",
      "https://x.com/mehmetgencv",
      "https://stackoverflow.com/users/13236602/mehmetgenc",
      "https://mehmetgencv.medium.com/",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
