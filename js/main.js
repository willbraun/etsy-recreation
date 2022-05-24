const source = document.querySelector('#result-template').innerHTML;
const template = Handlebars.compile(source);

const singleResult = 
        {
            listing_id: 699674912,
            state: "active",
            user_id: 226632027,
            category_id: null,
            title:
              "Gardenia Jasminoides Cape Jasmine Evergreen Shrub Healthy Plant In 9cm Pot",
            description:
              "Pot Size: 9cm\n\nPlant Height (Inc.Pot): 15-25cm\n\nCharacteristics: A cut and fragrant plant. This hardy, evergreen shrub has a glossy dark green foliage with various exotic white flowers\n\nGrowth & Spread: Height 0.9m \u2013 1.8m, Spread 0.9m \u2013 1.8m\n\nFlourishing Season: Blooms in early summer and will flourish all year round\n\nWater & Maintenance: Regular watering required, medium maintenance plants\n\nPlease Note: When purchasing plants please consider that each live item is unique and may therefore differ from the images shown, which are for illustration purposes only.\n\n---\n\nGlossy evergreen foliage provides the perfect backdrop for the exquisite blooms in summer. A beautiful, compact shrub perfect as an indoor ornamental plant\n\nThis Gardenia Jasminoides shrub has lustrous dark green leaves that flourish all year round. It blooms stunning star-shaped, single white flowers with various elegant petals, carrying an exquisite fragrance from late spring to mid-summer.\n\nThese beautiful shrubs thrive in dappled shade or semi-shade, planted in a rich fertile and neutral to acid soil, that is well-drained. Add a feed with balanced liquid fertilizer in March and later in June. Gardenia plants need regular watering if they are grown outdoors. Prune them slightly to maintain their neat shape and faded flowers in spring.\n\nGardenia Jasminoides despise competition other nearby plant roots. Although it is usually grown in greenhouses and conservatories, cape jasmine still makes a perfect container plant or used for sheltered borders.\n\nPlant your Cape Jasmine plant near garden entrance or patio where it can boast its showy flowers.",
            creation_tsz: 1653424592,
            ending_tsz: 1664051792,
            original_creation_tsz: 1560335179,
            last_modified_tsz: 1653424592,
            price: "8.49",
            currency_code: "GBP",
            quantity: 644,
            sku: ["9CM_GARJAS_#1_GD"],
            tags: [],
            materials: [],
            shop_section_id: 26505025,
            featured_rank: null,
            state_tsz: 1650066426,
            url: "https://www.etsy.com/listing/699674912/gardenia-jasminoides-cape-jasmine?utm_source=studentapidemo20&utm_medium=api&utm_campaign=api",
            views: 4762,
            num_favorers: 252,
            shipping_template_id: 74528141037,
            processing_min: 3,
            processing_max: 5,
            who_made: "i_did",
            is_supply: "false",
            when_made: "made_to_order",
            item_weight: null,
            item_weight_unit: "g",
            item_length: null,
            item_width: null,
            item_height: null,
            item_dimensions_unit: "mm",
            is_private: false,
            style: null,
            non_taxable: false,
            is_customizable: true,
            is_digital: false,
            file_data: "",
            should_auto_renew: true,
            language: "en-US",
            has_variations: false,
            taxonomy_id: 6871,
            taxonomy_path: [
              "Home & Living",
              "Outdoor & Gardening",
              "Plants",
              "House Plants",
            ],
            used_manufacturer: false,
            is_vintage: false,
            Images: [
              {
                listing_image_id: 1955683517,
                hex_code: "7B815F",
                red: 123,
                green: 129,
                blue: 95,
                hue: 71,
                saturation: 26,
                brightness: 50,
                is_black_and_white: false,
                creation_tsz: 1560335179,
                listing_id: 699674912,
                rank: 1,
                url_75x75:
                  "https://i.etsystatic.com/20406392/c/1000/794/0/0/il/806183/1955683517/il_75x75.1955683517_6wj8.jpg",
                url_170x135:
                  "https://i.etsystatic.com/20406392/c/1000/794/0/0/il/806183/1955683517/il_170x135.1955683517_6wj8.jpg",
                url_570xN:
                  "https://i.etsystatic.com/20406392/r/il/806183/1955683517/il_570xN.1955683517_6wj8.jpg",
                url_fullxfull:
                  "https://i.etsystatic.com/20406392/r/il/806183/1955683517/il_fullxfull.1955683517_6wj8.jpg",
                full_height: 1000,
                full_width: 1000,
              },
            ],
          };
 
const $resultsArea = document.querySelector('.results-list');
$resultsArea.innerHTML = template(singleResult);