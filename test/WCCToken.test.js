const WCCToken = artifacts.require('WCCToken');

contract('WCCToken', (accounts) => {
    before(async () => {
        wcc = await WCCToken.deployed();
        console.log('WCCToken Address:', wcc.address);
    });

    it('Gives the owner of the token 1M tokens', async () => {
        let balance = await wcc.balanceOf(accounts[0]);
        balance = web3.utils.fromWei(balance, 'ether');
        assert.equal(
            balance,
            '10000000000',
            'Balance should be 1M tokens for contract creator'
        );
    });

    it('Can transfer tokens between accounts', async () => {
        let amount = web3.utils.toWei('3000', 'ether');
        await wcc.transfer(accounts[1], amount, { from: accounts[0] });

        let balance = await wcc.balanceOf(accounts[1]);
        balance = web3.utils.fromWei(balance, 'ether');
        assert.equal(balance, '3000', 'Balance should be 3k tokens');
    });
});
