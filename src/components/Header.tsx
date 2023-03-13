import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import BookIcon from '@mui/icons-material/Book';

const drawerWidth = 240;
const navItems = ['About', 'Work', 'Contact'];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Richard Carrigan
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Button href={`#${item.toLowerCase()}`}>
                <ListItemText primary={item} />
              </Button>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div className="social">
        <Link
          href="https://fosstodon.org/@richardcarrigan"
          target="_blank"
          rel="noreferrer me"
          aria-label="Mastodon"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>mastodon</title><path d="M20.94,14C20.66,15.41 18.5,16.96 15.97,17.26C14.66,17.41 13.37,17.56 12,17.5C9.75,17.39 8,16.96 8,16.96V17.58C8.32,19.8 10.22,19.93 12.03,20C13.85,20.05 15.47,19.54 15.47,19.54L15.55,21.19C15.55,21.19 14.27,21.87 12,22C10.75,22.07 9.19,21.97 7.38,21.5C3.46,20.45 2.78,16.26 2.68,12L2.67,8.57C2.67,4.23 5.5,2.96 5.5,2.96C6.95,2.3 9.41,2 11.97,2H12.03C14.59,2 17.05,2.3 18.5,2.96C18.5,2.96 21.33,4.23 21.33,8.57C21.33,8.57 21.37,11.78 20.94,14M18,8.91C18,7.83 17.7,7 17.15,6.35C16.59,5.72 15.85,5.39 14.92,5.39C13.86,5.39 13.05,5.8 12.5,6.62L12,7.5L11.5,6.62C10.94,5.8 10.14,5.39 9.07,5.39C8.15,5.39 7.41,5.72 6.84,6.35C6.29,7 6,7.83 6,8.91V14.17H8.1V9.06C8.1,8 8.55,7.44 9.46,7.44C10.46,7.44 10.96,8.09 10.96,9.37V12.16H13.03V9.37C13.03,8.09 13.53,7.44 14.54,7.44C15.44,7.44 15.89,8 15.89,9.06V14.17H18V8.91Z" /></svg>
        </Link>
        <Link
          href="https://www.linkedin.com/in/richardcarrigan"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </Link>
        <Link
          href="https://github.com/richardcarrigan"
          target="_blank"
          rel="noreferrer"
          aria-label="Github"
        >
          <GitHubIcon />
        </Link>
        <Link
          href="https://blog.richardcarrigan.dev"
          target="_blank"
          rel="noreferrer"
          aria-label="Blog"
        >
          <BookIcon />
        </Link>
      </div>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar
          sx={{ display: { md: 'flex' }, justifyContent: 'space-between' }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', flexGrow: 1 }}
          >
            Richard Carrigan
          </Typography>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              width: '33%',
              justifyContent: 'center',
            }}
          >
            {navItems.map((item) => (
              <Button
                href={
                  item.toLowerCase() === 'blog'
                    ? `https://blog.richardcarrigan.dev`
                    : `#${item.toLowerCase()}`
                }
                key={item}
                sx={{ color: '#fff' }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              width: '33%',
              justifyContent: 'flex-end',
            }}
          >
            <Button
              sx={{ color: '#fff' }}
              href="https://twitter.com/Rich_Carrigan"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <TwitterIcon />
            </Button>
            <Button
              sx={{ color: '#fff' }}
              href="https://www.linkedin.com/in/richardcarrigan"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </Button>
            <Button
              sx={{ color: '#fff' }}
              href="https://github.com/richardcarrigan"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <GitHubIcon />
            </Button>
            <Button
              sx={{ color: '#fff' }}
              href="https://blog.richardcarrigan.dev"
              target="_blank"
              rel="noreferrer"
              aria-label="Blog"
            >
              <BookIcon />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
