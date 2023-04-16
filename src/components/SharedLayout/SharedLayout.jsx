import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Main,
  Container,
  Header,
  Navigation,
  NavigationList,
  NavigationItem,
  Link,
} from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <>
      <Header>
        <Container>
          <Navigation>
            <NavigationList>
              <NavigationItem>
                <Link to="/">Home</Link>
              </NavigationItem>
              <NavigationItem>
                <Link to="/movies">Movies</Link>
              </NavigationItem>
            </NavigationList>
          </Navigation>
        </Container>
      </Header>
      <Main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </>
  );
}
