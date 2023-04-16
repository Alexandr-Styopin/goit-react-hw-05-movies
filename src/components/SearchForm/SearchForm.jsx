import { Wrapper, Form, Label, SearchButton } from './SearchForm.styled';

export default function SearchForm({ onSubmit }) {
  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <label>
          <Label>Search Movies</Label>
          <input name="input" type="text" />
        </label>
        <SearchButton type="submit">Search</SearchButton>
      </Form>
    </Wrapper>
  );
}
