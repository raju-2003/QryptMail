import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
} from 'reactstrap';
import SimpleBar from 'simplebar-react';

import user1 from '../../assets/images/users/user1.jpg';
import user2 from '../../assets/images/users/user2.jpg';
import user3 from '../../assets/images/users/user3.jpg';
import user4 from '../../assets/images/users/user4.jpg';
import user5 from '../../assets/images/users/user5.jpg';

const msgsData = [
  {
    image: user1,
    name: 'James Anderson',
    comment: 'Lorem Ipsum is simply dummy text of the printing. simply dummy text',
    date: '10:20 AM',
  },
  {
    image: user2,
    name: 'Michael Jorden',
    comment: 'Lorem Ipsum is simply dummy text of the printing',
    date: '11:32 PM',
  },
  {
    image: user3,
    name: 'Johnathan Doeting',
    comment: 'Lorem Ipsum is simply dummy text of the printing',
    date: '01:00 AM',
  },
  {
    image: user4,
    name: 'Daniel Kristeen',
    comment: 'Lorem Ipsum is simply dummy text of the printing',
    date: '02:45 PM',
  },
  {
    image: user5,
    name: 'Jonathan Jones',
    comment: 'Lorem Ipsum is simply dummy text of the printing',
    date: '02:45 PM',
  },
];

const MyContact = () => {
  return (
    <Card>
      <span className="lstick bg-info"></span>
      <CardBody>
        <CardTitle tag="h4">My Contacts</CardTitle>
        <CardSubtitle className="text-muted">Recently arrived message</CardSubtitle>
      </CardBody>
      <SimpleBar style={{ height: '470px' }}>
        <ListGroup flush>
          {msgsData.map((icomment) => (
            <ListGroupItem
              action
              href="#"
              tag="a"
              key={icomment.name}
              className="border-0 p-3 w-100 rounded"
            >
              <div className="d-flex align-items-center">
                <img src={icomment.image} alt="user" width="45" className="rounded-circle" />
                <div className="ms-3 col-10">
                  <ListGroupItemHeading className="fw-normal mb-0 text-truncate">
                    {icomment.name}
                  </ListGroupItemHeading>
                  <span className="d-block text-truncate fs-6 text-muted">{icomment.comment}</span>
                  <small className="text-muted">{icomment.date}</small>
                </div>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
      </SimpleBar>
    </Card>
  );
};

export default MyContact;
