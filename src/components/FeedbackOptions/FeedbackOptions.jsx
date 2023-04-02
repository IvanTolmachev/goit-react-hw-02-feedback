import { FeedBackList, FeedBackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedBackList>
      {options.map(({ id, category }) => (
        <li key={id}>
          <FeedBackBtn
            onClick={() => {
              onLeaveFeedback(category);
            }}
          >
            {category}
          </FeedBackBtn>
        </li>
      ))}
    </FeedBackList>
  );
};
