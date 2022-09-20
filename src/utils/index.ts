import { Modal } from 'antd';

const shortText = (longText: string) => {
  if (longText.length < 200) return longText;
  let result = '';
  const splitText = longText.split(' ');

  for (let index = 0; index < splitText.length; index += 1) {
    if (result.length < 200) {
      result += ` ${splitText[index]}`;
    } else break;
  }
  result += ' ...';
  return result;
};

const errorAlert = (message: string) => {
  Modal.error({
    title: 'error alert',
    content: message,
  });
};

const getDate = (date: string) => {
  if (!date) return 'date is unknown!';
  const obj = new Date(date);
  const month = obj.toLocaleString('en', { month: 'long' });
  return `${month} ${obj.getDate()} ${obj.getFullYear()}`;
};

const voteCalc = (vote: number) => {
  const colors: [number, string][] = [
    [3, '#E90000'],
    [5, '#E97E00'],
    [7, '#E9D100'],
    [7, '#66E900'],
  ];
  if (vote > colors[colors.length - 1][0]) return colors[colors.length - 1][1];
  let current = colors[0][1];
  for (let index = 0; index < colors.length - 1; index += 1) {
    if (colors[index][0] <= vote) {
      current = `${colors[index][1]}`;
    }
  }
  return current;
};

export {
  shortText, errorAlert, getDate, voteCalc,
};
