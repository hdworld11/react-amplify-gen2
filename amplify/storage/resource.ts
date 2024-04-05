import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
    name: 'myProjectFiles',
    access: (allow) => ({
      // highlight-next-line
      'some/path/*': [
        allow.guest.to(["read"])
      ],
      // highlight-next-line
      'another/path/*': [
        // access rules that apply to all files within "/another/path/*" go here
      ]
    })
  });