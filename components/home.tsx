import Link from "next/link"

export function home() {
  return (
    <div className="bg-white text-black">
      <header className="flex justify-between items-center p-4 border-b">
        <FlagIcon className="text-xl" />
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link className="hover:underline" href="#">
                Work
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="text-center py-24">
          <h1 className="text-5xl font-bold mb-4">I'm Pete, a Senior PM who delivers exceptional work.</h1>
        </section>
        <section className="py-12 px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Work</h2>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <img
                alt="PrimaryMarkets"
                className="mb-2"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <h3 className="text-lg font-semibold">PrimaryMarkets</h3>
              <p>Product Build</p>
            </div>
            <div>
              <img
                alt="Lyft"
                className="mb-2"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <h3 className="text-lg font-semibold">Lyft</h3>
              <p>Enterprise Account</p>
            </div>
            <div>
              <img
                alt="School of Rock"
                className="mb-2"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <h3 className="text-lg font-semibold">School of Rock</h3>
              <p>Franchise Services</p>
            </div>
            <div>
              <img
                alt="Harkins Theatres"
                className="mb-2"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <h3 className="text-lg font-semibold">Harkins Theatres</h3>
              <p>Booking Platform</p>
            </div>
            <div>
              <img
                alt="Pereira O'Dell"
                className="mb-2"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <h3 className="text-lg font-semibold">Pereira O'Dell</h3>
              <p>Agency Site</p>
            </div>
            <div>
              <img
                alt="Clean"
                className="mb-2"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <h3 className="text-lg font-semibold">Clean</h3>
              <p>Ecommerce</p>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-12 px-4">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p>
                Senior PM with over 10 years in the industry, specialising in crafting exceptional digital experiences
                in products, platforms, and ecommerce. I empower teams to exceed expectations through collaboration,
                strong client relationships, and a passion for driving success.
              </p>
              <p className="mt-4">
                Expertise in project management, product strategy, design, and leveraging technology for optimal
                results. A collaborative and dedicated advocate committed to achieving exceptional outcomes for clients
                and teams alike.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Experience</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">Freelance PM</h3>
                  <p>2022 – Today</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Sitback Solutions</h3>
                  <p>Senior PM</p>
                  <p>2020 – 2022</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Metajive</h3>
                  <p>Senior Producer</p>
                  <p>2016 – 2020</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Agency Owner</h3>
                  <p>2010 – 2016</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 px-4">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Skills</h2>
              <ul className="list-disc pl-5">
                <li>Product Management</li>
                <li>Business Analysis</li>
                <li>Agile + Waterfall</li>
                <li>Deep Technical Knowledge</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Past Clients</h2>
              <ForkliftIcon className="h-8 w-8 mb-4" />
              <UmbrellaIcon className="h-8 w-8 mb-4" />
              <TwitchIcon className="h-8 w-8 mb-4" />
            </div>
          </div>
        </section>
        <section className="bg-black text-white text-center py-24">
          <h2 className="text-5xl font-bold mb-4">Say hello.</h2>
          <p className="text-xl">pwallroth@gmail.com</p>
          <div className="mt-8">
            <LinkedinIcon className="h-8 w-8" />
          </div>
        </section>
      </main>
      <footer className="text-center py-4 border-t">
        <p>© 2023</p>
      </footer>
    </div>
  )
}


function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function ForkliftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 12H5a2 2 0 0 0-2 2v5" />
      <circle cx="13" cy="19" r="2" />
      <circle cx="5" cy="19" r="2" />
      <path d="M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5" />
    </svg>
  )
}


function UmbrellaIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12a10.06 10.06 1 0 0-20 0Z" />
      <path d="M12 12v8a2 2 0 0 0 4 0" />
      <path d="M12 2v1" />
    </svg>
  )
}


function TwitchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
