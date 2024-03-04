import React, { useState } from 'react';
import './index.css';

const triviaQuestions = [
  {
    question: "What is the capital city of Bangladesh?",
    answer: "Dhaka is the capital and largest city of Bangladesh. It is one of the world's most densely populated cities and is located in the central part of the country, along the banks of the Buriganga River."
  },
  {
    question: "In which continent is Bangladesh located?",
    answer: "Bangladesh is located in South Asia. It shares borders with India to the west, north, and east, Myanmar to the southeast, and the Bay of Bengal to the south."
  },
  {
    question: "What is the currency of Bangladesh?",
    answer: "The currency of Bangladesh is the Bangladeshi Taka, abbreviated as BDT. One Taka is subdivided into 100 poisha. The symbol for the Taka is Tk."
  },
  {
    question: "Who is the national poet of Bangladesh?",
    answer: "Kazi Nazrul Islam, often referred to as the 'Rebel Poet,' is the national poet of Bangladesh. He was a Bengali poet, musician, and revolutionary who pioneered poetic works that highlighted the struggles and aspirations of the Bangladeshi people."
  },
  {
    question: "What is the largest river in Bangladesh?",
    answer: "The Padma River is the largest river in Bangladesh by discharge and the main distributary of the Ganges. It originates in the Himalayas and flows southwest through Bangladesh, eventually merging with the Meghna River to form the mighty Meghna-Ganges Delta, one of the largest river deltas in the world."
  }
];

const App = () => {
  return (
    <div>
      <Accordion data={triviaQuestions} />
    </div>
  );
};

function Accordion({ data }) {
  return (
    <div className='accordion'>
      {
        data.map((el, i) => <AccordionItem title={el.question} text={el.answer} num={i} key={el.title} />)
      }
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  function handleToggle() {
    setIsOpen(() => !isOpen);
  }
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <p className='number'>{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className='title'>{title}</p>
      <p className='icon'>{isOpen ? '-' : '+'}</p>
      {
        isOpen && <div className='content-box'>{text}</div>
      }
    </div>
  );
}

export default App;