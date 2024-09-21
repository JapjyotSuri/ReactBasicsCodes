import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
  background-color: #f5f5f5;
  margin-top: 39px;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const SearchContainer = styled.div`
  margin-bottom: 10px;
`;

const SearchInput = styled.input`
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const InputContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 16px;
  flex: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;
interface ButtonProps {
  editing?: boolean | undefined;
}

const Button = styled.button<ButtonProps>`
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 16px;
  background-color: ${({ editing }) => (editing ? '#ffd700' : '#4caf50')};
  color: #fff;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;

const DeleteAllButton = styled(Button)`
  background-color: #ff6347;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 10px;
  width: calc(50% - 50px);
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.22), 0 2px 4px rgba(0, 0, 0, 0.22);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-3px);
  }
`;

const CardTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const CardText = styled.p`
  font-size: 14px;
`;

const CardButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
interface Item {
  id: string;
  name: string;
  room: string;
  category: string;
  inStock: boolean
}
const Home: React.FC = ({}) => {
  // const [itemName, setItemName] = useState('');
  // const [itemRoom, setItemRoom] = useState('');
  // const [itemCategory, setItemCategory] = useState('');
  const [inventory, setInventory] = useState<Item[]>([]);
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [formDetails,setFormDetails]=useState({
    name: '',
    room: '',
    category: ''
  });
  const isFormValid= formDetails.name && formDetails.room && formDetails.category
  const handleInputChange = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };
  const addItemToInventory = () => {
    // Add a new inventory item with a unique ID, name, room, and category to the inventory list
    // but only if all these fields are provided.
    // After adding the item, clear the form.
    if(!formDetails.name || !formDetails.room || !formDetails.category){
      return 
    }
    const current={name: formDetails.name,room: formDetails.room,category: formDetails.category,id: `${currentIndex}`,inStock: false}
    console.log(current)
    setCurrentIndex((prev) => prev+1)
    setInventory((prev) => [...prev,current])
    clearForm();
  };

  const editItem = (item: Item) => {
    // Edit an existing inventory item by setting the current editing item
    // and populating the form with the item's details (name, room, and category).
    setEditingItem(item)
    setFormDetails({
      name: item.name,
      room: item.room,
      category: item.category
    })
    
    
  };

  const updateItem = () => {
    // Update the inventory list by replacing the details of the item being edited with the new values entered in the form.
    // After updating, reset the form fields using clearForm.
    const updatedItem={'name': formDetails.name,'category': formDetails.category,'room': formDetails.room,inStock: true}
    const updated=inventory.map((item: Item) => {
      if(editingItem!=null && item.id === editingItem?.id){
         return {...item,...updatedItem}
      }
      return item
    })
    setInventory(updated);
    clearForm();
  };

  const deleteItem = (itemId) => {
    // Remove an item
    const updated=inventory.filter((item) => item.id != itemId)
    setInventory(updated);
  };

  const deleteAllItems = () => {
    // Remove all items
    
      setInventory([]);
    
    
  };

  const clearForm = () => {
    // Reset the form fields
    setFormDetails({
      name: '',
      room: '',
      category: ''
    })
    setEditingItem(null);
  };

  const filteredInventory = inventory.filter((item) => {
    // Filter the inventory based on the search query
    
      return item.name.toLowerCase().includes(searchQuery.toLowerCase())
    

    
  });

  return (
    <Container>
      <Title>Home Inventory Manager</Title>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search Item"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </SearchContainer>
      <InputContainer>
        <Input
          type="text"
          placeholder="Item Name"
          value={formDetails.name}
          name="name"
          onChange={handleInputChange}
        />
        <Input
          type="text"
          placeholder="Room"
          name="room"
          value={formDetails.room}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          placeholder="Category"
          value={formDetails.category}
          name="category"
          onChange={handleInputChange}
        />
        <ButtonContainer>
          <Button onClick={() => { if(!editingItem) {addItemToInventory()}
            else{
              updateItem();
            }
        }} disabled={!isFormValid}>
            {editingItem ? 'Update Item' : 'Add Item'}
          </Button>
          <DeleteAllButton onClick={deleteAllItems}>Delete all</DeleteAllButton>
        </ButtonContainer>
        <Button onClick={clearForm}>Clear Form</Button>
      </InputContainer>
      <CardContainer>
        {filteredInventory.map((item) => (
          <Card key={item.id}>
            <CardTitle>{item.name}</CardTitle>
            <CardText>Room: {item.room}</CardText>
            <CardText>Category: {item.category}</CardText>
            <CardButtonContainer>
              <Button onClick={() => editItem(item)}>Edit</Button>
              <Button onClick={() => deleteItem(item.id)}>Delete</Button>
            </CardButtonContainer>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
};

export default Home;
