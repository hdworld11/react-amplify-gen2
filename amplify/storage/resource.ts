import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
    name: 'myProjectFiles',
    access: (allow) => ({
      // highlight-next-line
      'first-folder/*': [
        allow.authenticated.to(["read", "write"])
      ],
      // highlight-next-line
      'another/path/*': [
        // access rules that apply to all files within "/another/path/*" go here
      ]
    })
  });