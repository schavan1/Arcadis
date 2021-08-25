import { QuaireComponentType, QuaireItem, QuaireNavigationItem } from 'quaire';

export const items: QuaireItem[] = [
    {
      id: 1,
      resultProperty: 'foo', // property that is used to save the answer
      navigationItemId: 1, // assiciation with the navigation entry (optional)
      dependsOnResultProperties: [], // dependencies on answers from former questions, based on the result property - not questions IDs
      componentType: QuaireComponentType.SINGLE_SELECT, // component type as indication for custom presentation logic
      question: 'Question 1',
      description: 'Description 1',
      required: true,
      selectOptions: [], // options for select components (optional)
      rangeOption: {}, // option for range components (optional)
      inputOption: {}, // option for input components (optional)
      defaultValue: {}, // default value for any kind of component (optional)
      nextItemId: 0, // id of the follow up question (optional), usually you want to define this in selectOptions, rangeOption or inputOption
    },
    // ...
  ];