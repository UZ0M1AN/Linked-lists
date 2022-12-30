console.log('uzomian...');

class LinkedList {
    length = this.HEAD ? 1 : 0;

    constructor (HEAD) {
        this.HEAD = HEAD || null;
    }

    append (value) {      
        if (this.HEAD == null) {
            this.HEAD = factoryNode(value);
        }
        else {
            for (let i = 0, j = this.HEAD; i < this.length; i++) {
                if (!j.next) j.next = factoryNode(value);
                else j = j.next;
            } 
        }
        ++this.length;
        return this.HEAD;
    }

    prepend (value) {
        let next = this.HEAD;
        this.HEAD = factoryNode(value, next);
        
        ++this.length;
        return this.HEAD;
    }

    size () {
        return this.length;
    }

    head () {
        return this.HEAD;
    }

    tail () {
        for (let i = 1, j = this.HEAD; i <= this.length; i++) {
            if (i == this.length) return j;
            j = j.next;
        }

    }

    at (index) {
        for (let i = 0, j = this.HEAD; i < this.length; i++) {
            if (i == index) return j;
            j = j.next;
        }
    }

    pop () {
        --this.length;

        for (let i = 1, j = this.HEAD; i <= this.length; i++) {
            if (i == this.length) {
                const popped = j.next;
                j.next = null;
                return popped;
            }
            j = j.next;
        }
    }

    contains (value) {
        for (let i = 0, j = this.HEAD; i < this.length; i++) {
            if (j.value == value) return true;
            j = j.next;
        }
        return false;
    }

    find (value) {
        for (let i = 0, j = this.HEAD; i < this.length; i++) {
            if (j.value == value) return i;
            j = j.next;
        }
        return null;
    }

    toString () {
        let str = '';

        for (let i = 0, j = this.HEAD; i < this.length; i++) {
            str += `(${j.value}) -> `;
            j = j.next;
        }
        return str + 'null';
    }

    insertAt (value, index) {
        ++this.length;

        for (let i = 0, j = this.HEAD; i < this.length; i++) {
            if (i == index - 1) {
                const next = j.next;
                j.next = factoryNode(value, next);
                return j.next;
            }
            j = j.next;
        }
    }

    removeAt (index) {
        --this.length;

        for (let i = 0, j = this.HEAD; i < this.length; i++) {
            if (i == index - 1) {
                const popped = j.next;
                j.next = popped.next;
                return popped;
            }
            j = j.next;
        }
    }
}

function factoryNode (value = null, next = null) {
    return {value, next};
}


