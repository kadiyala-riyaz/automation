import { Selector } from "testcafe";
fixture('Getting Started')
    .page('https://dev.deepthought.education/login');


      /* Validate that appropriate error messages are displayed for invalid login attempts. */


    test('Test1', async t => {
        await t
        .typeText('#username', 'kadyalariyaz')
        .typeText('#password', '$$$ryazS143')
        .click('#login')
        await t
        await t.expect(Selector('#login-error-notify').withText('Invalid login credentials').exists).ok();
});
