<?php declare(strict_types = 1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180503185511 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE reservation DROP FOREIGN KEY FK_42C84955176DFE85');
        $this->addSql('DROP INDEX IDX_42C84955176DFE85 ON reservation');
        $this->addSql('ALTER TABLE reservation ADD apartment VARCHAR(255) NOT NULL, DROP apartment_id');
    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE reservation ADD apartment_id INT NOT NULL, DROP apartment');
        $this->addSql('ALTER TABLE reservation ADD CONSTRAINT FK_42C84955176DFE85 FOREIGN KEY (apartment_id) REFERENCES apartment (id)');
        $this->addSql('CREATE INDEX IDX_42C84955176DFE85 ON reservation (apartment_id)');
    }
}
