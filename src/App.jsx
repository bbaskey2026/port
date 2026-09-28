import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Stack,
  Card,
  CardContent,
  Chip,
  Divider,
} from "@mui/material";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Node.js",
  "Express",
  "Go",
  "Fiber",
  "PostgreSQL",
  "Material UI",
  "Docker",
  "REST APIs",
];

const projects = [
  {
    title: "Payment Platform",
    description:
      "A payment platform built with Node.js, Express and PostgreSQL, focused on REST APIs, transaction processing and business workflows.",
    technologies: ["Node.js", "Express", "PostgreSQL", "REST API"],
  },
  {
    title: "Customer Portal",
    description:
      "A responsive customer-facing portal built with React, TypeScript and Material UI with reusable components and business workflows.",
    technologies: ["React", "TypeScript", "Material UI"],
  },
  {
    title: "Prepaid Card Management System",
    description:
      "Worked on frontend modules, backend APIs, reporting workflows, SFTP integration and business features for a prepaid card management platform.",
    technologies: [
      "React",
      "Angular",
      "Node.js",
      "Go",
      "PostgreSQL",
      "SFTP",
    ],
  },
];

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#fff",
        color: "#000",
      }}
    >
      {/* NAVBAR */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "#fff",
          color: "#000",
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              minHeight: 72,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                letterSpacing: "-0.5px",
              }}
            >
              Bhima Baskey
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              <Button
                color="inherit"
                onClick={() => scrollToSection("about")}
              >
                About
              </Button>

              <Button
                color="inherit"
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </Button>

              <Button
                color="inherit"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </Button>

              <Button
                color="inherit"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* HERO */}
      <Box
        component="section"
        sx={{
          minHeight: {
            xs: "auto",
            md: "calc(100vh - 72px)",
          },
          display: "flex",
          alignItems: "center",
          py: {
            xs: 10,
            md: 0,
          },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              maxWidth: 850,
            }}
          >
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: 2,
                mb: 3,
              }}
            >
              SOFTWARE DEVELOPER
            </Typography>

            <Typography
              component="h1"
              sx={{
                fontSize: {
                  xs: "3.5rem",
                  sm: "5rem",
                  md: "7rem",
                },
                lineHeight: 0.95,
                fontWeight: 800,
                letterSpacing: "-5px",
                mb: 4,
              }}
            >
              Building
              <br />
              things for
              <br />
              the web.
            </Typography>

            <Typography
              sx={{
                maxWidth: 650,
                fontSize: {
                  xs: 18,
                  md: 21,
                },
                lineHeight: 1.7,
                color: "#444",
                mb: 4,
              }}
            >
              I'm Bhima Baskey, a software developer working with
              React, Node.js, Go, PostgreSQL and modern web
              technologies. I enjoy building practical, scalable
              applications and clean user interfaces.
            </Typography>

            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={2}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => scrollToSection("projects")}
                sx={{
                  bgcolor: "#000",
                  color: "#fff",
                  px: 3,
                  py: 1.5,
                  borderRadius: 1,
                  "&:hover": {
                    bgcolor: "#222",
                  },
                }}
              >
                View Projects
              </Button>

              <Button
                variant="outlined"
                size="large"
                onClick={() => scrollToSection("contact")}
                sx={{
                  borderColor: "#000",
                  color: "#000",
                  px: 3,
                  py: 1.5,
                  borderRadius: 1,
                  "&:hover": {
                    borderColor: "#000",
                    bgcolor: "#f5f5f5",
                  },
                }}
              >
                Contact Me
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Divider />

      {/* ABOUT */}
      <Box
        component="section"
        id="about"
        sx={{
          py: {
            xs: 8,
            md: 12,
          },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "200px 1fr",
              },
              gap: {
                xs: 4,
                md: 10,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: 2,
              }}
            >
              ABOUT
            </Typography>

            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: 28,
                    md: 42,
                  },
                  lineHeight: 1.3,
                  fontWeight: 600,
                  letterSpacing: "-1px",
                  mb: 4,
                }}
              >
                I build full-stack web applications with a focus on
                clean architecture, APIs and user experience.
              </Typography>

              <Typography
                sx={{
                  fontSize: 18,
                  lineHeight: 1.8,
                  color: "#555",
                  maxWidth: 750,
                }}
              >
                My development experience includes React and
                Angular frontend applications, Node.js and Express
                REST APIs, Golang/Fiber backend services,
                PostgreSQL databases, reporting systems and
                SFTP-based workflows.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Divider />

      {/* SKILLS */}
      <Box
        component="section"
        id="skills"
        sx={{
          py: {
            xs: 8,
            md: 12,
          },
          bgcolor: "#fafafa",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 2,
              mb: 5,
            }}
          >
            SKILLS
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1.5,
              maxWidth: 900,
            }}
          >
            {skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                sx={{
                  bgcolor: "#fff",
                  color: "#000",
                  border: "1px solid #ccc",
                  borderRadius: 1,
                  fontSize: 15,
                  px: 1,
                  py: 2.5,
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      <Divider />

      {/* EXPERIENCE */}
      <Box
        component="section"
        sx={{
          py: {
            xs: 8,
            md: 12,
          },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "200px 1fr",
              },
              gap: {
                xs: 4,
                md: 10,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: 2,
              }}
            >
              EXPERIENCE
            </Typography>

            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                Software Developer
              </Typography>

              <Typography
                sx={{
                  color: "#666",
                  mb: 3,
                }}
              >
                Full-Stack Web Development
              </Typography>

              <Typography
                sx={{
                  fontSize: 17,
                  lineHeight: 1.8,
                  color: "#444",
                  maxWidth: 750,
                }}
              >
                Worked on web applications involving React,
                Angular, Node.js, Express, Golang, PostgreSQL,
                REST APIs, reporting, SFTP integrations and
                business workflows. Also worked with Jira, Git,
                GitLab, Postman, Grafana and other development tools.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Divider />

      {/* PROJECTS */}
      <Box
        component="section"
        id="projects"
        sx={{
          py: {
            xs: 8,
            md: 12,
          },
          bgcolor: "#fafafa",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 2,
              mb: 5,
            }}
          >
            PROJECTS
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(3, 1fr)",
              },
              gap: 3,
            }}
          >
            {projects.map((project) => (
              <Card
                key={project.title}
                elevation={0}
                sx={{
                  height: "100%",
                  border: "1px solid #ddd",
                  borderRadius: 2,
                  bgcolor: "#fff",
                  transition: "transform 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#555",
                      lineHeight: 1.7,
                      mb: 3,
                      flexGrow: 1,
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                    }}
                  >
                    {project.technologies.map((technology) => (
                      <Chip
                        key={technology}
                        label={technology}
                        size="small"
                        sx={{
                          bgcolor: "#f1f1f1",
                          color: "#000",
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      <Divider />

      {/* CONTACT */}
      <Box
        component="section"
        id="contact"
        sx={{
          py: {
            xs: 10,
            md: 15,
          },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 2,
              mb: 4,
            }}
          >
            CONTACT
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "3rem",
                md: "5rem",
              },
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: "-3px",
              maxWidth: 800,
              mb: 5,
            }}
          >
            Let's build
            <br />
            something.
          </Typography>

          <Button
            variant="contained"
            size="large"
            href="mailto:bhima@example.com"
            sx={{
              bgcolor: "#000",
              color: "#fff",
              px: 3,
              py: 1.5,
              borderRadius: 1,
              "&:hover": {
                bgcolor: "#222",
              },
            }}
          >
            bhima@example.com
          </Button>
        </Container>
      </Box>

      <Divider />

      {/* FOOTER */}
      <Box
        component="footer"
        sx={{
          py: 4,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: 14,
                color: "#666",
              }}
            >
              © {new Date().getFullYear()} Bhima Baskey
            </Typography>

            <Stack direction="row" spacing={1}>
              <Button href="https://github.com/" target="_blank">
                GitHub
              </Button>
              <Button href="https://linkedin.com/" target="_blank">
                LinkedIn
              </Button>
              <Button href="mailto:bhima@example.com">Email</Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default App;