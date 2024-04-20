import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const initial = { profile: "", exp: 0, location: "", techs: [], desc: "" };

const Create = () => {
  const skillSet = [
    {
      name: "Languages",
      skills: [
        "JavaScript",
        "Java",
        "Python",
        "C++",
        "C#",
        "Go",
        "Swift",
        "Kotlin",
        "TypeScript",
        "Rust",
        "Scala",
        "Perl",
      ],
    },
    {
      name: "Technologies",
      skills: [
        "React.js",
        "Angular",
        "Node.js",
        "HTML",
        "CSS",
        "Vue.js",
        "Express.js",
        "Django",
        "Flask",
        "Laravel",
        "Symfony",
        "Spring",
        "ASP.NET",
        "jQuery",
      ],
    },
    {
      name: "Databases",
      skills: [
        "SQL",
        "NoSQL",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "SQLite",
        "Cassandra",
        "Couchbase",
        "DynamoDB",
        "MariaDB",
        "Oracle Database",
        "Firebase",
      ],
    },
    {
      name: "Cloud Platforms",
      skills: [
        "AWS",
        "Azure",
        "Google Cloud Platform",
        "IBM Cloud",
        "DigitalOcean",
        "Heroku",
        "Alibaba Cloud",
        "Oracle Cloud",
        "Salesforce Cloud",
        "VMware Cloud",
      ],
    },
    {
      name: "DevOps & Tools",
      skills: [
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Git",
        "Jenkins",
        "Ansible",
        "Terraform",
        "Puppet",
        "Vagrant",
        "Chef",
        "Prometheus",
        "Grafana",
        "ELK Stack",
        "Splunk",
        "Jira",
      ],
    },
    {
      name: "Methodologies",
      skills: [
        "Agile Methodologies",
        "Scrum",
        "Kanban",
        "Lean",
        "Waterfall",
        "DevOps",
        "Spiral Model",
        "RAD (Rapid Application Development)",
      ],
    },
  ];
  const navigate = useNavigate();
  const [form, setForm] = useState(initial);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://joblisting-latest.onrender.com/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((response) => console.log(response))
      .then((data) => console.log("Success:", data))
      .catch((error) => console.error("Error:", error));
    navigate("/employee/feed");
  };

  const { profile, exp, desc, location, techs } = form;

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setForm((prevForm) => ({
        ...prevForm,
        techs: [...prevForm.techs, name],
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        techs: prevForm.techs.filter((tech) => tech !== name),
      }));
    }
  };

  return (
    <Paper sx={{ padding: "2%" }} elevation={3}>
      <Typography sx={{ margin: "3% auto" }} align="center" variant="h5">
        Create New Post
      </Typography>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            type="string"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            onChange={(e) => setForm({ ...form, profile: e.target.value })}
            label="Job-profile"
            variant="outlined"
            value={profile}
          />
          <TextField
            type="string"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            label="Location"
            variant="outlined"
            value={location}
          />
          <TextField
            min="0"
            type="number"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            onChange={(e) => setForm({ ...form, exp: e.target.value })}
            label="Years of Experience"
            variant="outlined"
            value={exp}
          />
          <TextField
            type="string"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            multiline
            rows={4}
            onChange={(e) => setForm({ ...form, desc: e.target.value })}
            label="Job-desc"
            variant="outlined"
            value={desc}
          />
          <Box sx={{ margin: "1% auto" }}>
            <Typography variant="h6" gutterBottom>
              Please mention required skills:
            </Typography>
            <FormGroup>
              {skillSet.map(({ name, skills }) => (
                <Box key={name} sx={{ marginBottom: "1rem" }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {name}
                  </Typography>
                  {skills.map((skill) => (
                    <FormControlLabel
                      key={skill}
                      control={
                        <Checkbox
                          checked={techs.includes(skill)}
                          onChange={handleChange}
                          name={skill}
                          color="primary"
                        />
                      }
                      label={skill}
                    />
                  ))}
                </Box>
              ))}
            </FormGroup>
          </Box>
          <Button
            sx={{ width: "50%", margin: "2% auto" }}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Create;
