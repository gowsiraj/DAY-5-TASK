//Create your own resume data in json formate:

  const resumeData = {
    "name": "Gowsalya Sanjai Kumar",
    "contact": {
      "email": "gowsalyasanjai@gmail.com",
      "phone": "12345678",
      "address": "424,north street,viralimali-621316"
    },
    "skills": [
      "HTML",
      "CSS",
      "JS",
      "Node.js",
      "JavaScript",
      "Python",
      "Full Stack Development"
    ],
    "experience": [
      {
        "position": "School Teacher",
        "name": "Crescent School",
        "location": "Trichy",
        "years": "2014-2017"

      }
    ],
    "education": [
      {
        "school": "Patricl's School",
        "location": "Trichy,Tamilnadu"
      },
      {
        "degree": "Beachelor of Tecnhology",
        "college": "Mookambigai College of Engineering",
        "location": "Trichy,Tamilnadu",
        "dates": "2009-2013"
      }
    ],
    "projects": [
      {
        "title": "Omni Food Project",
        "description": "Developed a front web page",
        "technologies": ["HTML,CSS"]
      },
    
    ]
  };
  
  console.log(JSON.stringify(resumeData, null, 2));