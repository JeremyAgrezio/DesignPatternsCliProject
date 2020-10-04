const { help } =  require('./help');

// Homepage
function home () {
    const bold = '\x1b[1m'
    const cyan = '\x1b[36m%s\x1b[0m'
    const blue = '\x1b[34m%s\x1b[0m'


    console.log(bold + cyan, '\xa0\xa0\xa0\xa0______\xa0\xa0\xa0\xa0____\xa0\xa0\xa0\xa0\xa0\xa0\xa0____');
    console.log(bold + cyan, '\xa0\xa0\xa0/\xa0\xa0____|\xa0\xa0\xa0|\xa0\xa0|\xa0\xa0\xa0\xa0\xa0\xa0\xa0|__|');
    console.log(bold + cyan, '\xa0\xa0|\xa0\xa0|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\xa0\xa0|\xa0\xa0\xa0\xa0\xa0\xa0\xa0____');
    console.log(bold + cyan, '\xa0\xa0|\xa0\xa0|____\xa0\xa0\xa0\xa0|\xa0\xa0|___\xa0\xa0\xa0\xa0|\xa0\xa0|');
    console.log(bold + cyan, '\xa0\xa0\xa0\\______|\xa0\xa0\xa0|______|\xa0\xa0\xa0|__|');
    console.log(bold + blue, '\nA Design Pattern School Project ');
    console.log(cyan, '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0by Jeremy & Maxence \n ');

    help(); // show help information
}

exports.home = home;
