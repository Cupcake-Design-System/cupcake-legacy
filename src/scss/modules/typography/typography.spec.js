describe('Typography', () => {
  // c-text-ellipsis
  describe('c-text-ellipsis', () => {
    let $longText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius deserunt eum voluptatem nobis delectus enim dicta tempore quam ab sint eos, veritatis ipsam reiciendis repellat. Laborum eveniet illum laudantium quae nemo veritatis, eos atque ipsum, deleniti et possimus minima similique est fugiat laboriosam quia, qui excepturi officiis quo aspernatur? Omnis amet ullam aspernatur nostrum nam, eligendi, sit, eius voluptate delectus maiores voluptatum minima ipsa esse numquam est eum saepe itaque. Error ullam perferendis debitis repellat itaque ipsa! Cumque libero officiis id repellat debitis. Enim ut incidunt voluptatem reprehenderit omnis, iure suscipit deleniti officia dolore ratione doloribus placeat laborum nobis quis? Maxime cumque vel dolorem quidem, voluptas doloremque? Optio saepe numquam delectus laboriosam impedit perspiciatis voluptas necessitatibus laudantium. Quisquam non sunt eum? Molestias odit officia, ex rerum distinctio voluptatem adipisci ullam nobis aspernatur. Expedita repellat cumque architecto? Itaque non dicta hic. Neque quos deleniti veritatis nobis vero nesciunt nostrum blanditiis perspiciatis.`;
        $truncatedTextContainer = $(`<div class="c-text-ellipsis">${$longText}</div>`);
        $textContainer = $truncatedTextContainer
          .clone()
          .css({display: 'inline', width: 'auto', visibility: 'hidden'})

    before((done) => {
      $testContainer.append($truncatedTextContainer);
      $testContainer.append($textContainer);
      done();
    });

    it('should correctly truncate long text', () => {
      expect($textContainer.width() > $truncatedTextContainer.width(), 'string width').to.equal(true);
    });

    it('should have correct styles', () => {
        expect($truncatedTextContainer.css('white-space'), 'white-space').to.equal('nowrap');
        expect($truncatedTextContainer.css('overflow'), 'overflow').to.equal('hidden');
        expect($truncatedTextContainer.css('text-overflow'), 'text-overflow').to.equal('ellipsis');
    });
  });
});
