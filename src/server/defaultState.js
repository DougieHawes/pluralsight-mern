export const defaultState = {
  users: [
    {
      id: 'u1',
      name: 'Dev'
    },
    {
      id: 'u2',
      name: 'C. Eeyo'
    }
  ],
  groups: [
    {
      name: 'To Do',
      id: 'g1',
      owner: 'u1'
    },
    {
      name: 'Doing',
      id: 'g2',
      owner: 'u1'
    },
    {
      name: 'Done',
      id: 'g3',
      owner: 'u1'
    }
  ],
  tasks: [
    {
      name: 'Do Tests',
      id: 't1',
      group: 'g1',
      owner: 'u1',
      isComplete: false
    },
    {
      name: 'Refactor Tests',
      id: 't2',
      group: 'g1',
      owner: 'u1',
      isComplete: false
    }
  ],
  comments: [
    {
      owner: 'u1',
      id: 'c1',
      task: 't1',
      content: 'great work'
    },
    {
      owner: 'u1',
      id: 'c2',
      task: 't2',
      content: 'can do better'
    }
  ]
};
