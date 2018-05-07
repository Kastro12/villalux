<?php declare(strict_types = 1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180503124445 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE reservation DROP FOREIGN KEY FK_42C849554D71662F');
        $this->addSql('DROP INDEX IDX_42C849554D71662F ON reservation');
        $this->addSql('ALTER TABLE reservation CHANGE ap_name_id apartment_id INT NOT NULL');
        $this->addSql('ALTER TABLE reservation ADD CONSTRAINT FK_42C84955176DFE85 FOREIGN KEY (apartment_id) REFERENCES apartment (id)');
        $this->addSql('CREATE INDEX IDX_42C84955176DFE85 ON reservation (apartment_id)');
    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE reservation DROP FOREIGN KEY FK_42C84955176DFE85');
        $this->addSql('DROP INDEX IDX_42C84955176DFE85 ON reservation');
        $this->addSql('ALTER TABLE reservation CHANGE apartment_id ap_name_id INT NOT NULL');
        $this->addSql('ALTER TABLE reservation ADD CONSTRAINT FK_42C849554D71662F FOREIGN KEY (ap_name_id) REFERENCES apartment (id)');
        $this->addSql('CREATE INDEX IDX_42C849554D71662F ON reservation (ap_name_id)');
    }
}
