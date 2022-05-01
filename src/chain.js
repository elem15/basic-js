const chainMaker = {
    chain: [],
    getLength() {
        // throw new NotImplementedError('Not implemented');
       return this.chain.length;
    },
    addLink(value) {
        // throw new NotImplementedError('Not implemented');
        this.chain.push('( ' + value + ' )');
        return this;
    },
    removeLink(position) {
        // try {
            // console.log(this.chain.length)
            // console.log(position)
            if (typeof position !== 'number' || position <= 0 || position >= this.chain.length) {
              throw new Error ("You can't remove incorrect link!");
            }
            this.chain.splice(position - 1, 1);  
            return this;
        // } catch (e) {
        //     console.error(e)
        // }
    },
    reverseChain() {
        // throw new NotImplementedError('Not implemented');
        this.chain = this.chain.reverse();
        return this;
    },
    finishChain() {
        // throw new NotImplementedError('Not implemented');
        const result = this.chain.join('~~');
        this.chain = [];
        return result;
    }
};
// console.log(chainMaker.addLink('a').addLink('b').addLink('c').removeLink(1).reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).finishChain())
chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain()
// chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4)
// chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2)
// chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd')
// chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0)
console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain()) // '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )');
