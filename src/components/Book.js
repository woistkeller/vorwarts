import styled from "styled-components";
import { VscArrowSmallRight } from "react-icons/vsc";
import { motion } from "framer-motion";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  width: 100%;
  width: auto;
  background: #242424;
  border-radius: 10px;
  margin-bottom: 1rem;
  color: white;
  padding: 1rem;
`;

const ContainerCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Cover = styled.img`
  margin: 1rem;
  width: 100px;
  height: 150px;
  box-shadow: 0px 0px 10px #fafafaa1;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.7rem;

  span {
    text-transform: capitalize;
    font-family: "Bebas Neue", cursive;
  }
`;

const Autor = styled.div`
  text-transform: capitalize;
  font-size: 1rem;
  color: #fafafa80;
`;

const Link = styled.button`
  font-size: 1.3rem;
  border-radius: 5px;
  text-decoration: none;
  background-color: #fff38e;
  font-family: "Bebas Neue", cursive;
  box-shadow: 0 0 10px #fff38ea1;
  border: none;
  color: #242424;
  margin-right: 2rem;
  font-weight: bold;
  padding: 0.3rem;
  padding-left: 0.9rem;
  padding-right: 0.9rem;
`;

const Links = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 2rem;
`;

const Book = ({ book }) => {
  return (
    <Container>
      <ContainerCover>
        <Cover src={book.cover} />
      </ContainerCover>

      <Info>
        <span>{book.name}</span>
        <Autor>
          {book.autor}, {book.year}
        </Autor>

        <Links>
          <Link
            as={motion.div}
            whileHover={{ scale: 1.1 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            whileTap={{ scale: 0.9 }}
            onClick={() => (window.location.href = `/book/${book.name}`)}
            alt="its free"
          >
            go to book <VscArrowSmallRight></VscArrowSmallRight>
          </Link>
        </Links>
      </Info>
    </Container>
  );
};

export default Book;
