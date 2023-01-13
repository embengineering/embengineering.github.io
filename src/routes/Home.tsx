export default function Home() {
  return (
    <div className="relative">
      <NavMenu />
      <Picture />
      <Summary />
    </div>
  );
}

function NavMenu() {
  return (
    <nav className="fixed right-0 top-0 w-50 align-right">
      <ul>
        <li>Mode</li>
        <li>Home</li>
        <li>About Me</li>
        <li>Contact Me</li>
        <li>Blog</li>
      </ul>
    </nav>
  );
}

function Picture() {
  return (
    <div>
      <img
        alt="Profile"
        src="https://res.cloudinary.com/embengineering/image/upload/v1640187021/profile-pic.jpg"
      />
    </div>
  );
}

function Summary() {
  return (
    <>
      <h1>
        <span>I'm Emmanuel Morales.</span>{' '}
        <span>Software Engineer & Life Enthusiast</span>
      </h1>
      <p>
        High‐performing, strategic‐thinking professional with more than 15+
        years of experience designing solutions for complex web-based
        applications to support business objectives and enhance how people live,
        work, and communicate. Contributed to all levels of the development
        cycle, from obtaining requirements, documenting, architecture, and
        delivering high-quality solutions. Experienced in building responsive
        cross-platform applications using the latest technologies such as HTML,
        CSS, JavaScript, React, TypeScript, .NET Core, C#, MSSQL, Web API, and
        Cloud, among others.
      </p>
      <button>More About Me</button>
    </>
  );
}
