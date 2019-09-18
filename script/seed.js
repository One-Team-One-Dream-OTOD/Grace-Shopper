'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')
const {Book} = require('../server/db/models')
const {Genre} = require('../server/db/models')
const {Author} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const authors = await Promise.all([
    Author.create({firstName: 'Harper', lastName: 'Lee'}),
    Author.create({firstName: 'J. K.', lastName: 'Rowling'}),
    Author.create({firstName: 'J. R. R.', lastName: 'Tolkien'}),
    Author.create({firstName: 'F. Scott', lastName: 'Fitzgerald'}),
    Author.create({firstName: 'Suzanne', lastName: 'Collins'}),
    Author.create({firstName: 'C.S.', lastName: 'Lewis'}),
    Author.create({firstName: 'William', lastName: 'Shakespeare'}),
    Author.create({firstName: 'Frances Hodgson', lastName: 'Burnett'}),
    Author.create({firstName: 'Franklin', lastName: 'Beedle'}),
    Author.create({firstName: 'Dr. Miltiadis A', lastName: 'Boboulos'}),
    Author.create({firstName: 'Simon', lastName: 'Kendal'}),
    Author.create({firstName: 'Howard', lastName: 'Gould'}),
    Author.create({firstName: 'Roger', lastName: 'McHaney'}),
    Author.create({firstName: 'Dr Breda', lastName: 'Mccarthy'}),
    Author.create({firstName: 'Paurav', lastName: 'Shukla'}),
    Author.create({firstName: 'Lawrence Emeka', lastName: 'Modeme'}),
    Author.create({firstName: 'Jason', lastName: 'West'}),
    Author.create({firstName: 'Leah', lastName: 'Bendavid-Val'}),
    Author.create({firstName: 'Steven', lastName: 'Ascher'}),
    Author.create({firstName: 'Michael', lastName: 'Freeman'}),
    Author.create({firstName: 'Douglas J.', lastName: 'Noble'}),
    Author.create({firstName: 'Daniel', lastName: 'Levitin'}),
    Author.create({firstName: 'Daniel', lastName: 'Brian'})
  ])

  const genres = await Promise.all([
    Genre.create({genre: 'world clasic'}),
    Genre.create({genre: 'science'}),
    Genre.create({genre: 'marketing'}),
    Genre.create({genre: 'education'}),
    Genre.create({genre: 'art'}),
    Genre.create({genre: 'music'})
  ])

  const books = await Promise.all([
    Book.create({
      name: 'To Kill a Mockingbird ',
      description:
        'Compassionate, dramatic, and deeply moving, To Kill A Mockingbird takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos. Now with over 18 million copies in print and translated into forty languages, this regional story by a young Alabama woman claims universal appeal. Harper Lee always considered her book to be a simple love story. Today it is regarded as a masterpiece of American literature.',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51N5qVjuKAL._SX309_BO1,204,203,200_.jpg',
      price: 1099,
      SKU: 123,
      authorId: 1,
      genreId: 2
    }),
    Book.create({
      name: "Harry Potter and the Sorcerer's Stone",
      description:
        "Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright. From the surprising way he is greeted by a lovable giant, to the unique curriculum and colorful faculty at his unusual school, Harry finds himself drawn deep inside a mystical world he never knew existed and closer to his own noble destiny.",
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg',
      price: 989,
      SKU: 150,
      authorId: 2,
      genreId: 2
    }),
    Book.create({
      name: 'The Lord of the Rings: 50th Anniversary',
      description:
        'In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins.',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51eq24cRtRL._SX331_BO1,204,203,200_.jpg',
      price: 1499,
      SKU: 350,
      authorId: 3,
      genreId: 2
    }),
    Book.create({
      name: 'The Great Gatsby',
      description:
        'The Great Gatsby, F. Scott Fitzgerald’s third book, stands as the supreme achievement of his career. First published in 1925, this quintessential novel of the Jazz Age has been acclaimed by generations of readers. The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted “gin was the national drink and sex the national obsession,” it is an exquisitely crafted tale of America in the 1920s.',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/41iers%2BHLSL._SX326_BO1,204,203,200_.jpg',
      price: 1299,
      SKU: 200,
      authorId: 4,
      genreId: 2
    }),
    Book.create({
      name: 'The Hunger Games',
      description:
        'In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. Long ago the districts waged war on the Capitol and were defeated. As part of the surrender terms, each district agreed to send one boy and one girl to appear in an annual televised event called, "The Hunger Games," a fight to the death on live TV. Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she is forced to represent her district in the Games. The terrain, rules, and level of audience participation may change but one thing is constant: kill or be killed.',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/41ir9m8QQnL._SX332_BO1,204,203,200_.jpg',
      price: 1070,
      SKU: 270,
      authorId: 5,
      genreId: 2
    }),
    Book.create({
      name: 'The Lion, the Witch and the Wardrobe',
      description:
        'Four adventurous siblings—Peter, Susan, Edmund, and Lucy Pevensie—step through a wardrobe door and into the land of Narnia, a land frozen in eternal winter and enslaved by the power of the White Witch. But when almost all hope is lost, the return of the Great Lion, Aslan, signals a great change . . . and a great sacrifice.',

      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51erHMLhIzL._SX334_BO1,204,203,200_.jpg',
      price: 1459,
      SKU: 370,
      authorId: 6,
      genreId: 2
    }),
    Book.create({
      name: 'Romeo and Juliet',
      description:
        'Romeo and Juliet belongs to a tradition of tragic romances stretching back to antiquity. Its plot is based on an Italian tale, translated into verse as The Tragical History of Romeus and Juliet by Arthur Brooke in 1562 and retold in prose in Palace of Pleasure by William Painter in 1567. Shakespeare borrowed heavily from both but, to expand the plot, developed supporting characters, particularly Mercutio and Paris. Believed to have been written between 1591 and 1595, the play was first published in a quarto version in 1597.',

      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51dZbSxZ8YL._SX331_BO1,204,203,200_.jpg',
      price: 629,
      SKU: 170,
      authorId: 7,
      genreId: 2
    }),
    Book.create({
      name: 'The Secret Garden',
      description:
        'So begins the famous opening of one of the world’s best-loved children’s stories. First published in 1911, this is the poignant tale of a lonely little girl, orphaned and sent to a Yorkshire mansion at the edge of a vast lonely moor. At first, she is frightened by this gloomy place, but with the help of the local boy Dickon, who earns the trust of the moor’s wild animals with his honesty and love, the invalid Colin, a spoiled, unhappy boy terrified of life, and a mysterious, abandoned garden, Mary is eventually overcome by the mystery of life itself—its birth and renewal, its love and joy. ',

      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/518pCYt9iGL._SX308_BO1,204,203,200_.jpg',
      price: 1081,
      SKU: 380,
      authorId: 8,
      genreId: 2
    }),
    Book.create({
      name: 'Python Programming: An Introduction to Computer Science',
      description:
        "This third edition of John Zelle's Python Programming continues the tradition of updating the text to reflect new technologies while maintaining a time-tested approach to teaching introductory computer science. An important change to this edition is the removal of most uses of eval and the addition of a discussion of its dangers. In our increasingly connected world, it's never too early to begin considering computer security issues. This edition also uses several new graphics examples, developed throughout chapters 4-12.",

      imageUrl:
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT1oPIV7wzlpvucjDHEbjC-baMxL6ZsQOnqqYMLkVqWZqs-ACE-uMYQf4GO-ca0H6jQCGfgIHBNK8v0KQg3qhlXnwldPpslS4wNr72CKblh&usqp=CAY',
      price: 4500,
      SKU: 380,
      authorId: 10,
      genreId: 1
    }),
    Book.create({
      name: 'Automation and Robotics',
      description:
        'In this book for the optimisation of assembly conveyor lines we are dealing with series part production featured by a medium complexity degree and a medium number of individual components and assembly technique alternatives. Modern production techniques for medium to large series products or mass production usually involve assembly conveyor lines. The aim is to have monotonous and similar in type operations or such causing fatigue, stress and production traumas, gradually replaced by automated assembly cycles, means and techniques. Assembly alternatives involving automation, and mechanisation, programmable and adaptive control have been in addition analyzed.',

      imageUrl:
        'https://bookboon.com/thumbnail/380/cad3ee13-0f5e-e011-bd88-22a08ed629e5/a55e9eb4-f178-4be6-b662-a47400cad150/automation-and-robotics.jpg',
      price: 2500,
      SKU: 300,
      authorId: 9,
      genreId: 1
    }),
    Book.create({
      name: 'Object Oriented Programming using Java',
      description:
        'This book will explain the Object Oriented approach to programming and through the use of small exercises, for which feedback is provided, develop some practical skills as well. At the end of the book one larger case study will be used to illustrate the application of the techniques. This will culminate in the development of a complete Java program which can be downloaded with this book. Topics covered include : Abstraction, Inheritance, Polymorphism, Object Oriented Software Analysis and Design, The Unified Modelling Language (UML) , Agile Programming and Test Driven Development.',

      imageUrl:
        'https://bookboon.com/thumbnail/380/62d6ee13-0f5e-e011-bd88-22a08ed629e5/712b442e-8211-4858-89bb-a5930101f841/object-oriented-programming-using-java.jpg',
      price: 4010,
      SKU: 390,
      authorId: 12,
      genreId: 1
    }),
    Book.create({
      name: 'Database Design and Implementation',
      description:
        'This book uses a simple step by step approach to explain the essential relational database design modelling techniques, and shows how Oracle SQL can be used to implement a database. There are numerous practical exercises with feedback. Key topics include conceptual modelling using the crow’s feet notation and the Unified Modelling Language (UML), logical and physical modelling, normalisation, the structured query language (SQL) and simple application development using APEX forms and reports.',

      imageUrl:
        'https://bookboon.com/thumbnail/380/055917d6-7e80-4b84-850a-a4d000c4276a/5fd64c5d-40d7-421a-ae21-a5d900d9d963/database-design-and-implementation.jpg',
      price: 2350,
      SKU: 290,
      authorId: 13,
      genreId: 1
    }),
    Book.create({
      name: 'Understanding Computer Simulation',
      description:
        'This book describes computer simulation concepts then provides basic details about using discrete-event computer simulation for decision making. Input data collection and analysis, model construction, project mechanics, output analysis, verification, validation, reporting, logic transfer, and robust experimental design are all covered in detail. Example models are provided and illustrated using the GPSS simulation language, spreadsheet tools, and other products available on the Web. Statistical analysis is covered, with considerations for using simulation in business and project settings.',

      imageUrl:
        'https://bookboon.com/thumbnail/380/51d7ee13-0f5e-e011-bd88-22a08ed629e5/64e37c9d-019a-452e-980a-a55300b2adfc/understanding.jpg',
      price: 3320,
      SKU: 290,
      authorId: 11,
      genreId: 1
    }),
    Book.create({
      name: 'Strategy, Marketing Plans and Small Organisations',
      description:
        'Long term planning is the key to an organisation’s success. This book provides an overview of strategic planning and implementation processes. It explores the importance of planning to small organisations along with major influences on strategy such as competitors and the industry environment. It examines the role of the chief executive, culture and politics in the design and implementation of a strategic plan. It also outlines key components of a strategic marketing plan such as mission, objectives, marketing mix strategies, measurement and review. It draws on current research and includes case studies from a variety of industries.',

      imageUrl:
        'https://bookboon.com/thumbnail/380/e6bdb304-5cce-464e-9fc4-a5e800afa2b3/5597765a-44ab-4ce0-a244-a5e900b3b3dd/strategy-marketing-plans-and-small-organisations.jpg',
      price: 2050,
      SKU: 290,
      authorId: 14,
      genreId: 3
    }),
    Book.create({
      name: 'Essentials of Marketing Research',
      description:
        'Marketing research yields relevant, accurate, and timely information about consumers, and plays a critical role in managerial decision making. By putting marketing research results to creative use, firms can achieve and sustain a competitive advantage over their competitors. However, textbooks on this subject are often overwhelming to the layperson, focusing on abstract concepts and using difficult terminology in their explanations. By contrast, this e-book primer, Essentials of Marketing Research, introduces students and managers to important technical and analytical concepts in a very accessible manner. It can be downloaded for free here.',

      imageUrl:
        'https://bookboon.com/thumbnail/380/f6d5ee13-0f5e-e011-bd88-22a08ed629e5/a55e9eb4-f178-4be6-b662-a47400cad150/marketing-research-an-introduction.jpg',
      price: 4000,
      SKU: 270,
      authorId: 15,
      genreId: 3
    }),
    Book.create({
      name: 'English Legal System and Obligations',
      description:
        'Modern Business Law presents and discusses the essential topics of Business Law in a manner that is easy to follow and understand. It sets out the learning objectives at the beginning of each chapter, enabling the reader to have a clear focus. The book provides practice questions to enable readers test their understanding of the key issues as they go along. A summary of the key issues at the end of each chapter enables a consolidation of knowledge and understanding, while providing a tool for a quick overview of each topic.',

      imageUrl:
        'https://bookboon.com/thumbnail/380/3faed46e-e524-4838-a2e0-a682009ce593/fd11c6b5-c27e-407f-a9d5-a69000b0993b/english-legal-system-and-obligations.jpg',
      price: 3099,
      SKU: 270,
      authorId: 16,
      genreId: 4
    }),
    Book.create({
      name: 'I Still Can’t Speak English',
      description:
        "Millions can read and write English but don't feel comfortable speaking it. They are trying to practise using Facebook, Google Plus, Skype and online language exchanges like Livemocha.com and Italki.com. They know they need to practise. But, effective practice is not as easy as most people think. It requires proper preparation and process to be transformational.",

      imageUrl:
        'https://bookboon.com/thumbnail/380/3bf58559-034f-4676-bb5f-a2c101015a58/df3a9c2d-4acb-425f-9a35-827e7bef417d/i-still-cant-speak-english.jpg',
      price: 2780,
      SKU: 270,
      authorId: 17,
      genreId: 4
    }),
    Book.create({
      name: 'English for English Speakers',
      description:
        "You may not be a professional writer. Yet no matter what type of profession you are in, chances are you will need to write something on a professional level at one time or another. This e-book includes tips that will help you improve your writing (and actually get your writing done faster and easier) no matter what type of writing you need to do. You'll use it as a handy reference again and again!",

      imageUrl:
        'https://bookboon.com/thumbnail/380/416cc622-ff87-4cc3-a4f9-a0ed00f96cfb/9a9ba4cd-1a54-4072-a426-a5d400e5c107/be-a-better-writer.jpg',
      price: 3510,
      SKU: 200,
      authorId: 18,
      genreId: 4
    }),
    Book.create({
      name: 'National Geographic: The Photographs',
      description:
        'This stunning volume was the gift book of the year when it first published, and the images that grace its pages remain iconic. From the famous Afghan girl whose haunting green eyes stare out from the book’s cover, and her poignant story that captured the world’s interest, to award-winning photography culled from the Society’s vast archives, The Photographs offers readers an inside look at National Geographic and a sharp-eyed view of the world. The book showcases the skill and imagination of such notable Geographic photographers as David Doubilet, William Albert Allard, Sam Abell, Jim Stanfield, Jodi Cobb, Jim Brandenburg, David Alan Harvey, and many more. They share their techniques, as well as personal and colorful anecdotes about individual images and their adventures in the field—sometimes humorous, sometimes terrifying, always vividly compelling. Author Leah Bendavid-Val writes about the photographers’ achievements from technical, journalistic, and artistic perspectives.',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51hu%2BBc-GBL._SX453_BO1,204,203,200_.jpg',
      price: 3280,
      SKU: 200,
      authorId: 19,
      genreId: 5
    }),
    Book.create({
      name: "The Filmmaker's Handbook",
      description:
        'Widely acknowledged as the “bible” of video and film production, and used in courses around the world, The Filmmaker’s Handbook is now updated with the latest advances in HD and new digital formats. For students and teachers, professionals and novices, this indispensable handbook covers all aspects of movie making.',

      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51v5GHQH5EL._SX332_BO1,204,203,200_.jpg',
      price: 2200,
      SKU: 200,
      authorId: 20,
      genreId: 5
    }),
    Book.create({
      name: "The Photographer's Eye Remastered 10th Anniversary",
      description:
        'The Photographers Eye shows how anyone can develop an eye for seeing great digital photos. The book explores all the traditional approaches to composition and design, but crucially, it also addresses the new digital technique of shooting in the knowledge that a picture will later be edited, manipulated, or montaged to result in a final image that may be very different from the one seen in the viewfinder.',

      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/61BPYvStOcL._SX459_BO1,204,203,200_.jpg',
      price: 2550,
      SKU: 200,
      authorId: 21,
      genreId: 5
    }),
    Book.create({
      name: 'The Right Way to Play Guitar',
      description:
        "The guitar is not only one of the most popular instruments, but also one of the most challenging to play. Whether your ambition is to become the next Jimi Hendrix, to accompany yourself singing, or merely to reap the benefits of a new hobby, Douglas J Noble can-and will-teach you The Right Way to Play Guitar. This book assumes you have no musical proficiency and no previous experience of the guitar. It takes you-step-by-step, and in layman's terms-from the very first notes, through the chords, to fingering and basic music theory. Advice is also offered on choosing the right guitar for you.",

      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/515eAtIPjSL._SX324_BO1,204,203,200_.jpg',
      price: 2040,
      SKU: 200,
      authorId: 22,
      genreId: 6
    }),
    Book.create({
      name: 'This is Your Brain on Music',
      description:
        'Using musical examples from Bach to the Beatles, Levitin reveals the role of music in human evolution, shows how our musical preferences begin to form even before we are born and explains why music can offer such an emotional experience. Music is an obsession at the heart of human nature, even more fundamental to our species than language. In this is your brain on music Levitin offers nothing less than a new way to understand it and its role in human life.',

      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/41194zLhNgL._SX324_BO1,204,203,200_.jpg',
      price: 3300,
      SKU: 200,
      authorId: 22,
      genreId: 6
    }),
    Book.create({
      name: 'Playing Keyboard Made Easy Volume',
      description:
        " Time-tested bestseller around the world! The legendary Modern Course series provides a clear and complete foundation in the study of the piano that enables the student to think and feel musically. It's known as the method for quick, dedicated learners. It's also well-regarded as a self-teaching method for the mature player. The First Grade may be preceded by Teaching Little Fingers to Play and/or Teaching Little Fingers to Play More . NOTE: The 2018 reprint of Grade 1 features less fingering and fresh engravings.",
      author: '',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51YM54x120L._SX327_BO1,204,203,200_.jpg',
      price: 1700,
      SKU: 200,
      authorId: 23,
      genreId: 6
    })
  ])

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
