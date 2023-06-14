import * as React from 'react';
import { Dropdown, FormControl } from 'react-bootstrap';

interface SearchableDropdownButtonProps {
  id: string;
  title: string;
  items: string[];
}

const BasicButtonExample: React.FC<SearchableDropdownButtonProps> = ({
  id,
  title,
  items,
}) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredItems, setFilteredItems] = React.useState(items);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(searchTerm)
    );
    setFilteredItems(filteredItems);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle id={id} variant="primary">
        {title}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <FormControl
          type="text"
          placeholder="Type text..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <Dropdown.Divider />
        {filteredItems?.map((item, index) => (
          <Dropdown.Item key={index} href={`#/action-${index + 1}`}>
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default BasicButtonExample;
