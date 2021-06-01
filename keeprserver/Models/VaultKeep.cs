namespace keeprserver.Models
{
    public class VaultKeep
    {
        public int Id { get; set; }
        public string CreatorId { get; set; }
        public int VaultId { get; set; }
        public int KeepId { get; set; }
    }

    public class VaultKeepRes
    {
        public int VaultId { get; set; }
        public int KeepId { get; set; }
        public int VaultKeepId { get; set; }
        public string CreatorId { get; set; }
        public string VName { get; set; }
        public string KName { get; set; }
        public string VDescription { get; set; }
        public string KDescription { get; set; }
        public string Img { get; set; }

        public int Views { get; set; }
        public int Shares { get; set; }


    }
}