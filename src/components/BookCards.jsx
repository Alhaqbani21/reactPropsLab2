import Book from './Book';
import img1 from '../assets/book1.png';
import img2 from '../assets/book2.png';
import img3 from '../assets/book3.png';
import img4 from '../assets/book4.png';
import img5 from '../assets/book5.png';

function BookCards() {
  return (
    <div className="d-flex gap-5 justify-content-center flex-wrap">
      <Book
        textContent="Out is a fashion, style, celebrity and opinion magazine for the modern gay man."
        title="Out - Jum. I 1999"
        imgSrc={img1}
        item1="Vol. 7"
        item2="No. 7"
        item3="Magazine"
        link="https://books.google.com.sa/books?id=L2IEAAAAMBAJ&printsec=frontcover&dq=books+google&hl=en&sa=X&ved=2ahUKEwjqyMzk_c6GAxVi2wIHHdBnAHAQ6AF6BAgNEAI"
      />
      <Book
        textContent="LIFE Magazine is the treasured photographic magazine that chronicled the 20th Century. It now lives on at LIFE.com, the largest, most amazing collection of professional photography on the internet."
        title="LIFE - Ram. 8, 1355 AH"
        imgSrc={img2}
        item1="Vol. 1"
        item2="No. 1"
        item3="Magazine"
        link="https://books.google.com.sa/books?id=N0EEAAAAMBAJ&printsec=frontcover&dq=books+google&hl=en&sa=X&ved=2ahUKEwjqyMzk_c6GAxVi2wIHHdBnAHAQ6AF6BAgMEAI"
      />
      <Book
        textContent="LIFE Magazine is the treasured photographic magazine that chronicled the 20th Century. It now lives on at LIFE.com, the largest, most amazing collection of professional photography on the internet."
        title="LIFE - Sha. 3, 1380 AH"
        imgSrc={img3}
        item1="Vol. 50"
        item2="No. 3"
        item3="Magazine"
        link="https://books.google.com.sa/books?id=U0kEAAAAMBAJ&printsec=frontcover&dq=books+google&hl=en&sa=X&ved=2ahUKEwjqyMzk_c6GAxVi2wIHHdBnAHAQ6AF6BAgHEAI"
      />
      <Book
        textContent="LIFE Magazine is the treasured photographic magazine that chronicled the 20th Century. It now lives on at LIFE.com, the largest, most amazing collection of professional photography on the internet."
        title="LIFE - Ram. 24, 1358 AH"
        imgSrc={img4}
        item1="Vol. 7"
        item2="No. 19"
        item3="Magazine"
        link="https://books.google.com.sa/books?id=9kEEAAAAMBAJ&printsec=frontcover&dq=books+google&hl=en&sa=X&ved=2ahUKEwjqyMzk_c6GAxVi2wIHHdBnAHAQ6AF6BAgEEAI"
      />
      <Book
        textContent="EBONY is the flagship magazine of Johnson Publishing. Founded in 1945 by John H. Johnson, it still maintains the highest global circulation of any African American-focused magazine."
        title="Ebony - Muh. 1973"
        imgSrc={img5}
        item1="Vol. 28"
        item2="No. 11"
        item3="Magazine"
        link="https://books.google.com.sa/books?id=r9QDAAAAMBAJ&printsec=frontcover&dq=books+google&hl=en&sa=X&ved=2ahUKEwj4gLqwgs-GAxUcUKQEHZ3PAiU4ChDoAXoECAkQAg"
      />
    </div>
  );
}

export default BookCards;
