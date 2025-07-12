// app/typography-test/page.tsx (atau pages/typography-test.tsx)
export default function TypographyTest() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1 style={{ fontFamily: 'Graphik', fontWeight: 400 }}>
        Graphik Regular (400)
      </h1>
      <h1 style={{ fontFamily: 'Graphik', fontWeight: 500 }}>
        Graphik Medium (500)
      </h1>
      <h1 style={{ fontFamily: 'Graphik', fontWeight: 700 }}>
        Graphik Bold (700)
      </h1>

      <hr />

      <h2 style={{ fontFamily: 'Sohne', fontWeight: 400 }}>
        Sohne Regular (400)
      </h2>
      <h2 style={{ fontFamily: 'Sohne', fontWeight: 700 }}>
        Sohne Bold (700)
      </h2>
      <h2 style={{ fontFamily: 'Sohne', fontWeight: 400, fontStyle: 'italic' }}>
        Sohne Italic (400 italic)
      </h2>

      <hr />

      <h3 style={{ fontFamily: 'Bagoss', fontWeight: 300 }}>
        Bagoss Light (300)
      </h3>
      <h3 style={{ fontFamily: 'Bagoss', fontWeight: 600 }}>
        Bagoss Medium (600)
      </h3>
      <h3 style={{ fontFamily: 'Bagoss', fontWeight: 800 }}>
        Bagoss Bold (800)
      </h3>
    </main>
  );
}
