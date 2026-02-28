 var M = null;

    function getVal() {
        return document.getElementById('display').value;
    }

    function setVal(v) {
        document.getElementById('display').value = v;
    }

    function appendNum(n) {
        var current = getVal();
        if (current === '0') {
            setVal(n);
        } else {
            setVal(current + n);
        }
    }

    function appendOp(op) {
        var current = getVal();
        if (current === '') return;
        var last = current[current.length - 1];
        if (['+', '-', '*', '/'].includes(last)) {
            setVal(current.slice(0, -1) + op);
        } else {
            setVal(current + op);
        }
    }

    function appendDot() {
        var current = getVal();
        var parts = current.split(/[\+\-\*\/]/);
        var lastPart = parts[parts.length - 1];
        if (!lastPart.includes('.')) {
            setVal(current + '0.');
        }
    }

    function calculate() {
        try {
            var result = eval(document.getElementById('display').value);
            setVal(result);
        } catch(e) {
            setVal('Error');
        }
    }

    function clearAll() {
        setVal('');
    }

    function toggleSign() {
        var current = getVal();
        if (current === '' || current === '0') return;
        if (current[0] === '-') {
            setVal(current.substring(1));
        } else {
            setVal('-' + current);
        }
    }

    function reciprocal() {
        var n = parseFloat(getVal());
        if (isNaN(n) || n === 0) { setVal('Error'); return; }
        setVal(1 / n);
    }

    function square() {
        var n = parseFloat(getVal());
        if (isNaN(n)) { setVal('Error'); return; }
        setVal(n * n);
    }

    function squareRoot() {
        var n = parseFloat(getVal());
        if (isNaN(n) || n < 0) { setVal('Error'); return; }
        setVal(Math.sqrt(n));
    }

    function memStore() {
        var current = getVal();
        // only store if it's a plain number, not an equation
        if (current === '' || /[+\-*\/]/.test(current.replace(/^-/, ''))) return;
        var n = parseFloat(current);
        if (!isNaN(n)) {
            M = n;
        }
    }

    function memClear() {
        M = null;
    }

    function memRecall() {
        if (M !== null) setVal(M);
    }

    function memAdd() {
        var n = parseFloat(getVal());
        if (!isNaN(n)) {
            M = (M === null ? 0 : M) + n;
        }
    }