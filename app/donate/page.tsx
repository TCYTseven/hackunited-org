export default function DonatePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 py-16">
      <div className="w-full max-w-2xl mx-auto flex justify-center">
        <iframe
          src="https://hcb.hackclub.com/donations/start/hackunited"
          style={{ border: "none" }}
          name="donateFrame"
          scrolling="yes"
          frameBorder="0"
          marginHeight="0px"
          marginWidth="0px"
          height="512px"
          width="512px"
          allowFullScreen
          className="rounded-lg shadow-lg"
        />
      </div>
    </main>
  )
}
