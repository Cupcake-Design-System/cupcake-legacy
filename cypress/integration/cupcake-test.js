
const hexToRgbConverter = require('hex2rgb');
const hex2rgb = c => hexToRgbConverter(c).rgbString;


describe('default button', () => {

    it('should have correct general styles', () => {
        
        cy.visit('index.html');

        cy.get('[data-test-btn]')
            .should('have.css', 'height', '30px')
            .should('have.css', 'font-size', '12px')
            .should('have.css', 'color', hex2rgb('#495057'))
            .should('have.css', 'border', '1px solid ' + hex2rgb('#ced4da'))
            .should('have.css', 'box-shadow', 'rgba(33, 37, 41, 0.1) 0px 1px 0px 0px');

    });

    it('should have correct hover state', () => {
        
        cy.visit('index.html');

        cy.get('[data-test-btn]').trigger('mousedown')
            .should('have.css', 'height', '30px')
            .should('have.css', 'font-size', '12px')
            .should('have.css', 'color', hex2rgb('#495057'))
            .should('have.css', 'border', '1px solid ' + hex2rgb('#ced4da'))
            .should('have.css', 'box-shadow', 'rgb(255, 255, 255) 0px 0px 1px 1px, rgb(77, 173, 247) 0px 0px 2px 3px');

    });

    it('should have correct focus state', () => {
        
        cy.visit('index.html');

        cy.get('[data-test-btn]').wait(200).click('topRight')
            .should('have.css', 'height', '30px')
            .should('have.css', 'font-size', '12px')
            .should('have.css', 'color', hex2rgb('#495057'))
            .should('have.css', 'border', '1px solid ' + hex2rgb('#ced4da'))
            .should('have.css', 'box-shadow', 'rgb(255, 255, 255) 0px 0px 1px 1px, rgb(77, 173, 247) 0px 0px 2px 3px');
            
    });

});