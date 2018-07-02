const test = require('tape-css')(require('tape'));
const h = require('hyperscript');

const cupcakeStyles = `
    .c-btn {
        height: 30px;
    }
`;

const testButton = h('button.c-btn.c-btn-default');
const container = h('div', testButton);



test('my test', {dom: container, cupcakeStyles}, (is) => {
    // let buttonHeight = window.getComputedStyle(document.querySelector('.c-btn'), null).height;
    let buttonHeight = window.getComputedStyle(container.querySelector('.c-btn'), null).height;







    is.equal(
        window.getComputedStyle(container.querySelector('.c-btn'), null).height,
        '30px',
        'check button height'
    );






    // console.log(container.querySelector('.c-btn').style);
    
    is.end();
});














// const styles = `
//   .parent {
//     position: relative;
//     width: 100%;
//     height: 100%;
//   }

//   .child {
//     position: relative;
//     float: left;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }
// `;


// const positionOf = (element) => {
//     const {top, right, bottom, left} = element.getBoundingClientRect();
//     return {top, right, bottom, left};
//   };

//   const contents = h('div', { style: 'width: 193px; height: 122px' });
// const child = h('.child', [contents]);
// const parent = h('.parent', [child]);
// const container = h('div', { style: 'width: 513px; height: 324px' }, [parent]);

// test((
//   '`.parent` takes up the whole width and height of its container'
// ), { dom: container, styles }, (is) => {
//   is.deepEqual(
//     positionOf(parent),
//     positionOf(container)
//   );
//   is.end();
// });

// test((
//   '`.child` grows and shrink to fit its contents'
// ), { dom: container, styles }, (is) => {
//   is.deepEqual(
//     positionOf(child),
//     positionOf(contents)
//   );
//   is.end();
// });

// test((
//   '`.child` is centered horizontally within its `.parent`'
// ), { dom: container, styles }, (is) => {
//   is.equal(
//     positionOf(parent).right - positionOf(child).right,
//     positionOf(child).left - positionOf(parent).left
//   );
//   is.end();
// });

// test((
//   '`.child` is centered vertically within its `.parent`'
// ), { dom: container, styles }, (is) => {
//   is.equal(
//     positionOf(parent).bottom - positionOf(child).bottom,
//     positionOf(child).top - positionOf(parent).top
//   );
//   is.end();
// });
