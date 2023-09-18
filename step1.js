fixture('Getting Started')
    .page('https://dev.deepthought.education/login');

    test('Test1', async t => {
                /* Test successful login with valid credentials. */
    await t
    .typeText('#username', 'kadiyalariyaz')
    .typeText('#password', '$$$riyazS143')
    .click('#login');
    
    });