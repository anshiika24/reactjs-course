import Card from './components/Card'

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg",
      nameOfCompany: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 45,
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
      nameOfCompany: "Meta",
      datePosted: "2 weeks ago",
      post: "React Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 65,
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
      nameOfCompany: "Amazon",
      datePosted: "10 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 50,
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      nameOfCompany: "Apple",
      datePosted: "1 week ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 70,
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      nameOfCompany: "Netflix",
      datePosted: "3 weeks ago",
      post: "Platform Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 75,
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png",
      nameOfCompany: "Microsoft",
      datePosted: "5 weeks ago",
      post: "Cloud Support Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 40,
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://pngimg.com/d/tesla_logo_PNG12.png",
      nameOfCompany: "Tesla",
      datePosted: "4 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 60,
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://www.nvidia.com/content/nvidiaGDC/us/en_US/about-nvidia/legal-info/logo-brand-usage/_jcr_content/root/responsivegrid/nv_container_392921705/nv_container/nv_image.coreimg.100.1070.png/1703060329053/nvidia-logo-vert.png",
      nameOfCompany: "NVIDIA",
      datePosted: "8 weeks ago",
      post: "AI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 80,
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      nameOfCompany: "IBM",
      datePosted: "6 days ago",
      post: "Data Analyst",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: 35,
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/1280px-Oracle_logo.svg.png",
      nameOfCompany: "Oracle",
      datePosted: "10 weeks ago",
      post: "Java Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 55,
      location: "Mumbai, India"
    }
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return <div key={idx}>
          <Card brandLogo={elem.brandLogo} company={elem.nameOfCompany} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
        </div>
      })}
    </div>
  )
}

export default App
