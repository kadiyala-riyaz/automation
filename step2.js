import { Selector } from "testcafe";
fixture('Getting Started')
    .page('https://dev.deepthought.education/login');

    test('Test1', async t => {
    
        /* Test unsuccessful login attempts with invalid credentials. */

        await t
        .typeText('#username', 'kadiyalariyaz')
        .typeText('#password', '$$$riyaz143')
        .click('#login');
});
