const { sequelize, Produit } = require('./models'); // Adjust the path based on your project structure

// Your business logic
async function yourFunction() {
  const t = await sequelize.transaction();

  try {
    // Perform your operations using the transaction

    // Example: Creating a new Produit within the transaction
    const newProduit = await Produit.create({
      Libelle: 'New Libelle',
      Ref: 'New Ref',
      // ... other fields
    }, { transaction: t });

    // Commit the transaction
    await t.commit();

    console.log('Transaction committed successfully');
  } catch (error) {
    // Rollback the transaction if there's an error
    await t.rollback();
    console.error('Error in transaction:', error);
  }
}

// Call your function
yourFunction();
