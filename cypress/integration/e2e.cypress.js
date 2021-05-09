describe('The App', function () {
	beforeEach(() => {
		cy.visit('http://localhost:8080')
	})

	it('front page can be opened', function () {
		cy.contains('MY STORE')
	})

	it('filtering functionality works properly', function () {
		cy.contains('Cheaper than 50kr').click()
		cy.contains('69 kr').should('not.exist')
	})

	it('sorting cheapest functionality works properly', function () {
		cy.get('select').select('cheapest')
		cy.get('.article_item').first().contains('35 kr')
	})

	it('sorting most expensive  functionality works properly', function () {
		cy.get('select').select('most expensive')
		cy.get('.article_item').first().contains('149 kr')
	})

	it('sorting most rating  functionality works properly', function () {
		cy.get('select').select('most rating')
		cy.get('.article_item').first().contains('4.9')
	})

	it('sorting lowest rating  functionality works properly', function () {
		cy.get('select').select('lowest rating')
		cy.get('.article_item').first().contains('3.6')
	})

	it('sorting most relevance  functionality works properly', function () {
		cy.get('select').select('most relevance')
		cy.get('.article_item')
			.first()
			.contains('2-Pack härdat glas för iPhone')
	})
})
