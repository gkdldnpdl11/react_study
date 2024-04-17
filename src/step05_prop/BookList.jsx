import { Container, List, ListItem } from "@mui/material";
import React , {Component} from "react";
import BookListItem from "./BookListItem";

class BookList extends Component{
    render(){
        // 원래 사용하는 방식
        // const books = this.props.books;

        // 구조 분해 할당 방식, 이 방식으로 사용
        const {books} = this.props;
        const bookItems = books.map((k) => {
            return(
                <ListItem>
                    <BookListItem book={k} />
                </ListItem>
            )
        })
        // return(
        //     <List>
        //         <ListItem> Item01 </ListItem>
        //         <ListItem> Item02 </ListItem>
        //         <ListItem> Item03 </ListItem>
        //     </List>
        // )
        return(
            <Container maxWidth='md'>
                <List>
                    {bookItems}
                </List>
            </Container>
        )
    }
}

export default BookList;